import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  console.error('Browser QA requires Playwright. Use the workspace runtime or install Playwright for maintainer QA.');
  process.exit(2);
}

const root = fileURLToPath(new URL('../docs/', import.meta.url));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.md':'text/markdown; charset=utf-8'};
const server = createServer(async (request, response) => {
  try {
    const relative = decodeURIComponent(new URL(request.url, 'http://localhost').pathname).replace(/^\/+/, '') || 'index.html';
    const path = normalize(join(root, relative));
    if (!path.startsWith(normalize(root))) throw new Error('outside root');
    const bytes = await readFile(path);
    response.writeHead(200, {'content-type':types[extname(path)] || 'application/octet-stream','cache-control':'no-store'});
    response.end(bytes);
  } catch {
    response.writeHead(404, {'content-type':'text/plain'}); response.end('Not found');
  }
});

const assert = (condition, message) => { if (!condition) throw new Error(message); };
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const port = server.address().port;
const executablePath = process.env.FORGE_BROWSER_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser = await chromium.launch({headless:true, executablePath, args:['--no-sandbox']});
const sizes = [
  {name:'desktop',width:1440,height:1000},
  {name:'chromebook',width:1366,height:768},
  {name:'tablet',width:820,height:1180},
  {name:'mobile',width:390,height:844}
];
const routes = ['home','challenges','learn','projects','community','resources','builders','security','contribute','sandbox'];
const challenges = JSON.parse(await readFile(new URL('../docs/data/challenges.json', import.meta.url), 'utf8'));
const results = [];

try {
  for (const size of sizes) {
    const page = await browser.newPage({viewport:size});
    const consoleErrors = [];
    page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
    page.on('pageerror', error => consoleErrors.push(error.message));
    for (const route of routes) {
      const response = await page.goto(`http://127.0.0.1:${port}/#${route}`, {waitUntil:'networkidle'});
      assert(response === null || response.ok(), `${size.name}/${route}: page did not load`);
      await page.waitForSelector('.route');
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
      assert(!overflow, `${size.name}/${route}: horizontal overflow`);
      const title = await page.locator('h1').first().textContent();
      assert(title?.trim(), `${size.name}/${route}: missing h1`);
      results.push(`${size.name}/${route}: ok`);
    }
    for (const challenge of challenges) {
      await page.goto(`http://127.0.0.1:${port}/#challenge?id=${challenge.id}`, {waitUntil:'networkidle'});
      await page.waitForSelector('.example-data');
      assert((await page.locator('h1').textContent()).includes(challenge.title), `${challenge.id}: wrong detail`);
      assert(await page.locator('a').filter({hasText:'Unfinished starter'}).count() === 1, `${challenge.id}: no starter`);
      assert(!await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1), `${size.name}/${challenge.id}: overflow`);
      assert(await page.locator('a[href^="../"]').count() === 0, `${challenge.id}: link outside Pages deployment`);
      results.push(`${size.name}/${challenge.id}: ok`);
    }
    if (process.env.FORGE_QA_SCREENSHOTS) {
      await page.goto(`http://127.0.0.1:${port}/#challenge?id=B01`, {waitUntil:'networkidle'});
      await page.screenshot({path:join(process.env.FORGE_QA_SCREENSHOTS, `forge-${size.name}.png`),fullPage:true});
    }
    assert(consoleErrors.length === 0, `${size.name}: console errors: ${consoleErrors.join(' | ')}`);
    await page.close();
  }

  const context = await browser.newContext({viewport:{width:1280,height:900}});
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:${port}/#sandbox`,{waitUntil:'networkidle'});
  await page.locator('#sandbox-next').click();
  await page.locator('#sandbox-branch').fill('main');
  await page.locator('#sandbox-next').click();
  assert((await page.locator('#sandbox-status').textContent()).includes('Do not use main'),'sandbox accepts main as practice branch');
  await page.locator('#sandbox-branch').fill('practice/clear-steps');
  await page.locator('#sandbox-next').click();
  await page.locator('#sandbox-editor').fill('1. Check the practice branch.\n2. Preview the Markdown edit.\n3. Confirm the base is my fork main.');
  await page.reload({waitUntil:'networkidle'});
  assert((await page.locator('#sandbox-editor').inputValue()).includes('practice branch'),'sandbox draft lost on reload');
  await page.locator('#sandbox-next').click();
  await page.locator('#sandbox-message').fill('Clarify contribution instructions');
  await page.reload({waitUntil:'networkidle'});
  assert((await page.locator('#sandbox-message').inputValue())==='Clarify contribution instructions','sandbox commit message lost on reload');
  await page.locator('#sandbox-next').click();
  await page.locator('#sandbox-base').selectOption('upstream');
  await page.locator('#sandbox-next').click();
  assert((await page.locator('#sandbox-status').textContent()).includes('own fork'),'sandbox allowed wrong PR base');
  await page.locator('#sandbox-base').selectOption('fork');
  await page.locator('#sandbox-next').click();
  await page.locator('#sandbox-review').check();
  await page.locator('#sandbox-next').click();
  await page.locator('#sandbox-next').click();
  assert((await page.locator('#sandbox-app').textContent()).includes('Practice merge complete'),'sandbox merge did not complete');
  await page.reload({waitUntil:'networkidle'});
  assert((await page.locator('#sandbox-app').textContent()).includes('Practice merge complete'),'sandbox completion did not persist');
  await page.goto(`http://127.0.0.1:${port}/#challenges`, {waitUntil:'networkidle'});
  assert(await page.locator('.catalog-card').count() === 24, 'challenge catalog did not render 24 cards');
  await page.locator('.skip-link').focus();
  await page.keyboard.press('Enter');
  assert(page.url().endsWith('#challenges'),'skip link changed route');
  assert(await page.locator('#main').evaluate(el=>document.activeElement===el),'skip link did not focus main');
  await page.locator('#challenge-search').fill('no-result-xyz');
  await page.locator('.empty a').click();
  assert(await page.locator('.catalog-card').count()===24,'empty-state reset failed');
  await page.locator('#challenge-search').fill('security');
  assert(await page.locator('.catalog-card').count() > 0 && await page.locator('.catalog-card').count() < 24, 'challenge search did not filter');
  await page.locator('#challenge-reset').click();
  await page.locator('#challenge-difficulty').selectOption('Advanced');
  assert(await page.locator('.catalog-card').count() === 8, 'advanced filter did not return 8 challenges');
  await page.locator('h1').click();
  await page.keyboard.press('/');
  assert(await page.locator('#search-dialog').evaluate(element => element.open), 'keyboard search shortcut did not open dialog');
  await page.locator('#global-search').fill('first PR');
  assert(await page.locator('.global-result').count() > 0, 'global search returned no first PR result');
  await page.locator('.close-search').click();
  assert(!await page.locator('#search-dialog').evaluate(element => element.open), 'search close button did not close dialog');
  await page.goto(`http://127.0.0.1:${port}/#learn`, {waitUntil:'networkidle'});
  await page.locator('a[href="#challenge?id=B01"]').first().click();
  await page.waitForSelector('.example-data');
  assert((await page.locator('h1').textContent()).includes('Focus Timer'), 'path link did not open exact challenge');
  await page.locator('[data-check="0"]').check();
  await page.locator('[data-note="0"]').fill('Test a fake clock before real time.');
  await page.reload({waitUntil:'networkidle'});
  assert(await page.locator('[data-check="0"]').isChecked(), 'workspace progress was not saved');
  assert((await page.locator('[data-note="0"]').inputValue()).includes('fake clock'), 'workspace notes were not saved');
  await page.locator('#practice-input').fill('{broken');
  await page.locator('#check-input').click();
  assert((await page.locator('#input-result').textContent()).includes('needs attention'), 'invalid JSON accepted');
  await page.locator('#reset-input').click();
  await page.locator('#check-input').click();
  assert((await page.locator('#input-result').textContent()).includes('does not test your implementation'), 'input check overclaims validation');
  const downloadEvent=page.waitForEvent('download');
  await page.locator('#export-evidence').click();
  assert((await downloadEvent).suggestedFilename()==='forge-B01-evidence.md', 'evidence export failed');
  await page.locator('#restore-work').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('{"version":1,"records":{"__proto__":{}}}')});
  assert((await page.locator('.workspace [role=status]').textContent()).includes('Restore failed'),'unsafe backup accepted');
  assert((await page.locator('[data-note="0"]').inputValue()).includes('fake clock'),'bad restore erased notes');
  await page.locator('.workspace summary').click();
  const backupEvent=page.waitForEvent('download');await page.locator('#backup-work').click();assert((await backupEvent).suggestedFilename()==='forge-notes-backup.json','backup download failed');
  // A valid restore round trip must preserve text as text, with no HTML execution.
  page.once('dialog',dialog=>dialog.accept());
  await page.locator('#restore-work').setInputFiles({name:'valid.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify({version:1,records:{B01:{checks:[true],notes:{Plan:'<img src=x onerror=alert(1)> restored text'}}}}))});
  assert((await page.locator('[data-note="0"]').inputValue()).includes('restored text'),'valid backup restore failed');
  assert(await page.locator('.workspace img').count()===0,'restored text became HTML');
  // A stale tab must not overwrite new work or silently discard its own draft.
  const second=await page.context().newPage();
  await second.goto(`http://127.0.0.1:${port}/#challenge?id=B01`,{waitUntil:'networkidle'});
  await page.locator('[data-note="0"]').fill('Newest saved plan');
  await second.locator('[data-note="0"]').fill('Conflicting unsaved plan');
  assert((await second.locator('.workspace [role=status]').textContent()).includes('another tab'),'stale tab overwrote newer data');
  second.once('dialog',dialog=>dialog.accept());await second.locator('#clear-work').click();
  assert((await second.locator('[data-note="0"]').inputValue())==='Conflicting unsaved plan','failed clear discarded unsaved draft');
  await second.goto(`http://127.0.0.1:${port}/#resources`,{waitUntil:'networkidle'});
  await second.goto(`http://127.0.0.1:${port}/#challenge?id=B01`,{waitUntil:'networkidle'});
  assert((await second.locator('[data-note="0"]').inputValue())==='Conflicting unsaved plan','route navigation lost unsaved draft');
  await second.locator('[data-note="0"]').fill('Still conflicting after navigation');
  assert((await second.locator('.workspace [role=status]').textContent()).includes('another tab'),'navigation bypassed conflict protection');
  assert(await page.evaluate(()=>JSON.parse(localStorage.getItem('forge-workspace-v1')).B01.notes.Plan)==='Newest saved plan','conflicting draft replaced saved plan');
  await second.close();
  await page.locator('.search-trigger').click();
  await page.locator('#global-search').fill('B04');
  await page.locator('.global-result').first().click();
  await page.waitForSelector('.example-data');
  assert((await page.locator('h1').textContent()).includes('Grade Scenario'), 'search did not open exact challenge');
  await page.goto(`http://127.0.0.1:${port}/#challenge?id=missing`, {waitUntil:'networkidle'});
  assert(await page.locator('a').filter({hasText:'Back to catalog'}).count() === 1, 'unknown challenge lacks recovery');
  await page.setViewportSize({width:390,height:844});
  await page.goto(`http://127.0.0.1:${port}/#home`, {waitUntil:'networkidle'});
  await page.locator('.menu-button').click();
  assert(await page.locator('.primary-nav').evaluate(element => element.classList.contains('open')), 'mobile menu did not open');
  await page.locator('.mobile-search').click();
  assert(await page.locator('#search-dialog').evaluate(el=>el.open),'mobile search unavailable');
  await page.locator('.close-search').click();
  assert(await page.locator('meta[name="description"]').getAttribute('content'), 'missing meta description');
  assert(await page.locator('.skip-link').count() === 1, 'missing skip link');
  assert(await page.locator('a[href="#home"][aria-current="page"]').count() === 1, 'current route is not announced');
  await context.close();
  const recoveryContext=await browser.newContext();
  const recovery=await recoveryContext.newPage();
  await recovery.goto(`http://127.0.0.1:${port}/#home`,{waitUntil:'networkidle'});
  await recovery.evaluate(()=>{localStorage.setItem('forge-workspace-v1','{broken');localStorage.setItem('forge-sandbox-v1',JSON.stringify({stage:7}));});
  await recovery.goto(`http://127.0.0.1:${port}/#challenge?id=B01`,{waitUntil:'networkidle'});
  await recovery.locator('[data-note="0"]').fill('Recoverable session notes');
  assert((await recovery.locator('.workspace [role=status]').textContent()).includes('Saving is unavailable'),'corrupt storage warning absent');
  assert(await recovery.evaluate(()=>localStorage.getItem('forge-workspace-v1'))==='{broken','corrupt data silently replaced');
  await recovery.goto(`http://127.0.0.1:${port}/#sandbox`,{waitUntil:'networkidle'});
  assert((await recovery.locator('#sandbox-status').textContent()).includes('could not be read'),'inconsistent sandbox state accepted');
  await recoveryContext.close();
  const failureContext=await browser.newContext();
  const failure=await failureContext.newPage();
  await failure.route('**/data/challenges.json',r=>r.fulfill({status:503,body:'Unavailable'}));
  await failure.goto(`http://127.0.0.1:${port}/`,{waitUntil:'networkidle'});
  assert(await failure.locator('#retry-catalog').count()===1,'load failure has no retry');
  assert(await failure.locator('.error-state a').count()===1,'load failure has no accessible catalog alternative');
  await failure.unroute('**/data/challenges.json');
  await failure.locator('#retry-catalog').click();
  await failure.waitForSelector('.route');
  await failureContext.close();
  console.log(`Site QA OK: ${results.length} responsive route checks + filters, search, keyboard shortcut, mobile navigation, and semantic checks`);
} finally {
  await browser.close();
  server.close();
}

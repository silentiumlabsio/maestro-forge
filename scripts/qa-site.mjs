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
const routes = ['home','challenges','learn','projects','community','resources','builders','security','contribute'];
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
    assert(consoleErrors.length === 0, `${size.name}: console errors: ${consoleErrors.join(' | ')}`);
    await page.close();
  }

  const page = await browser.newPage({viewport:{width:1280,height:900}});
  await page.goto(`http://127.0.0.1:${port}/#challenges`, {waitUntil:'networkidle'});
  assert(await page.locator('.catalog-card').count() === 24, 'challenge catalog did not render 24 cards');
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
  await page.setViewportSize({width:390,height:844});
  await page.goto(`http://127.0.0.1:${port}/#home`, {waitUntil:'networkidle'});
  await page.locator('.menu-button').click();
  assert(await page.locator('.primary-nav').evaluate(element => element.classList.contains('open')), 'mobile menu did not open');
  assert(await page.locator('meta[name="description"]').getAttribute('content'), 'missing meta description');
  assert(await page.locator('.skip-link').count() === 1, 'missing skip link');
  assert(await page.locator('a[href="#home"][aria-current="page"]').count() === 1, 'current route is not announced');
  await page.close();
  console.log(`Site QA OK: ${results.length} responsive route checks + filters, search, keyboard shortcut, mobile navigation, and semantic checks`);
} finally {
  await browser.close();
  server.close();
}

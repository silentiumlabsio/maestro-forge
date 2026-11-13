/* Local learning tools. User text is data only; no code evaluation or uploads. */
const forgeUnsavedDrafts = new Map();
window.addEventListener('beforeunload', event => { if (forgeUnsavedDrafts.size) { event.preventDefault(); event.returnValue = ''; } });
function mountWorkspace(route, catalog, view) {
  const key = 'forge-workspace-v1';
  let saved = {}, readFailed=false, baseline;
  try { saved = JSON.parse(localStorage.getItem(key) || '{}'); if (!saved || typeof saved !== 'object' || Array.isArray(saved)) throw new Error('Invalid saved notes'); } catch { saved = {};readFailed=true; }
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const panel = document.createElement('section'); panel.className = 'section shell workspace';
  const save = () => { try { if(readFailed)throw new Error('Unreadable storage');const latest=JSON.parse(localStorage.getItem(key)||'{}');if(!latest||typeof latest!=='object'||Array.isArray(latest))throw new Error('Invalid storage');if(JSON.stringify(latest[recordKey]??null)!==baseline)throw new Error('Another tab changed this workspace');if(Object.hasOwn(saved,recordKey))latest[recordKey]=saved[recordKey];else delete latest[recordKey];localStorage.setItem(key, JSON.stringify(latest));baseline=JSON.stringify(latest[recordKey]??null); panel.querySelector('[role=status]').textContent = 'Saved in this browser. Self-reported practice, not verification.';forgeUnsavedDrafts.delete(recordKey);return true; } catch { panel.querySelector('[role=status]').textContent = 'Saving is unavailable or this workspace changed in another tab. Export your notes before reloading; saved data has not been replaced.';forgeUnsavedDrafts.set(recordKey,{record,baseline});return false; } };
  const download = (name, text) => { const url = URL.createObjectURL(new Blob([text], {type:'text/plain;charset=utf-8'})); const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000); };
  const id = new URLSearchParams(location.hash.split('?')[1] || '').get('id');
  const challenge = catalog.challenges.find(c=>c.id===id);
  let recordKey, fields, checks;
  if (route === 'challenge' && challenge) {
    recordKey = challenge.id;
    fields = ['Plan','Observed results','Design decisions','Known limitations','Repository URL','Commit SHA','AI assistance and attribution'];
    checks = challenge.criteria;
    panel.innerHTML = `<h2>Your ${esc(id)} workspace</h2><p>Work through the actual brief here. Save a plan, edit synthetic input, record results and export evidence. Implement your code in your own repository.</p><label>Practice input (JSON)<textarea id="practice-input" maxlength="30000" rows="10"></textarea></label><button class="button" id="check-input">Check input structure</button><button class="button" id="reset-input">Restore example</button><pre id="input-result" aria-live="polite"></pre>`;
  } else if (route === 'community' || route === 'contribute') {
    recordKey='sandbox';fields=['Practice branch','Rewritten instructions','Review question','Feedback received','Reflection'];
    checks=['Fork the repository','Create a practice branch','Write an original Markdown card','Preview and commit the edit','Open a PR with the correct base','Read and respond to review','Confirm the merge in the target branch'];
    panel.innerHTML='<h2>First PR practice workspace</h2><p>Track the real steps in GitHub. For a rehearsal, target your own fork. Checking a box here does not create a branch or merge a PR.</p><a class="button" href="https://github.com/silentiumlabsio/maestro-forge/blob/main/first-pr-sandbox/README.md">Open step-by-step instructions →</a>';
  } else if (route === 'resources' || route === 'learn') {
    panel.innerHTML='<h2>Your learning notebook</h2><p>Progress is self-reported and stored only in this browser.</p>';
    if(route==='learn') panel.innerHTML += catalog.paths.map(p=>`<article class="feature-panel"><h3>${esc(p.name)}</h3>${p.challengeIds.map(cid=>{const n=Array.isArray(saved[cid]?.checks)?saved[cid].checks.slice(0,catalog.challenges.find(c=>c.id===cid).criteria.length).filter(v=>v===true).length:0;const total=catalog.challenges.find(c=>c.id===cid).criteria.length;return `<p><a href="#challenge?id=${cid}">${cid}</a> — ${n}/${total} criteria self-checked</p>`;}).join('')}</article>`).join('');
    recordKey='notebook';fields=['Learning goal','Notes','Next action'];checks=[];
  } else return;
  if(route==='community') {
    const workshops={sandbox:['First PR practice',fields],prompt:['Prompt Lab',['Goal','Prompt text','Synthetic input','Expected behavior','Actual output','Limitations']],experiment:['Experiment Lab',['Hypothesis','Controlled inputs','Method','Actual observations','Limitations','Next experiment']],failure:['Failure Lab',['Expected behavior','Reproduction steps','Observed failure','Evidence','Confirmed cause or hypothesis','Correction']],incubator:['Project planner',['Problem and intended user','Smallest useful outcome','Non-goals','Roles','Trust boundaries','Milestones']]};
    const choice=new URLSearchParams(location.hash.split('?')[1]||'').get('workspace')||'sandbox';
    if(Object.hasOwn(workshops,choice)&&choice!=='sandbox'){recordKey=choice;fields=workshops[choice][1];checks=[];panel.innerHTML=`<h2>${esc(workshops[choice][0])} workspace</h2><p>Draft original, public-safe work. Record observed results honestly; export your draft when ready to request review.</p>`;}
    panel.insertAdjacentHTML('afterbegin',`<label>Choose a workshop<select id="workshop-choice">${Object.entries(workshops).map(([k,v])=>`<option value="${k}" ${k===choice?'selected':''}>${v[0]}</option>`).join('')}</select></label>`);
  }
  const existing = saved[recordKey];
  baseline=forgeUnsavedDrafts.get(recordKey)?.baseline ?? JSON.stringify(existing??null);
  const record = forgeUnsavedDrafts.get(recordKey)?.record || (existing && typeof existing === 'object' && !Array.isArray(existing) ? existing : {});
  saved[recordKey]=record;
  record.checks=checks.map((_,i)=>Array.isArray(record.checks)&&record.checks[i]===true);
  if (!record.notes || typeof record.notes !== 'object' || Array.isArray(record.notes)) record.notes={};
  panel.innerHTML += `${checks.length?'<h3>Acceptance checklist</h3>':''}<div class="practice-checks">${checks.map((c,i)=>`<label><input type="checkbox" data-check="${i}" ${record.checks[i]?'checked':''}> ${esc(c)}</label>`).join('')}</div><p id="practice-count"></p>${fields.map((f,i)=>`<label>${esc(f)}<textarea data-note="${i}" maxlength="10000" rows="3">${esc(record.notes[f])}</textarea></label>`).join('')}<div class="card-actions"><button class="button button-primary" id="export-evidence">Export evidence</button><button class="button" id="clear-work">Clear this workspace</button></div><p id="workspace-status" role="status">Local notes stay in this browser. Do not enter secrets or private course material.</p>`;
  panel.insertAdjacentHTML('beforeend','<details><summary>Back up and restore learning notes</summary><p>Backups contain your notes and self-checks, not verification. Keep them somewhere you control. Restoring replaces the saved learning notes in this browser.</p><button class="button" id="backup-work">Download notes backup</button><label>Restore a Forge notes backup<input type="file" id="restore-work" accept="application/json,.json"></label></details>');
  view.querySelector('.route').append(panel);
  if(readFailed||forgeUnsavedDrafts.has(recordKey))panel.querySelector('[role=status]').textContent='Some notes are only in this tab because saving failed. Export them before leaving, or restore a valid backup.';
  panel.querySelector('#backup-work').onclick=()=>{let all=saved;try{const latest=JSON.parse(localStorage.getItem(key)||'{}');if(latest&&typeof latest==='object'&&!Array.isArray(latest))all={...latest,[recordKey]:saved[recordKey]};}catch{}all={...all};for(const [id,draft] of forgeUnsavedDrafts)all[id]=draft.record;download('forge-notes-backup.json',JSON.stringify({version:1,records:all},null,2));};
  panel.querySelector('#restore-work').onchange=async event=>{
    const file=event.target.files[0];if(!file)return;
    const status=panel.querySelector('[role=status]');
    try {
      if(file.size>2000000)throw new Error('Backup exceeds 2 MB.');
      const incoming=JSON.parse(await file.text());
      if(incoming.version!==1||!incoming.records||typeof incoming.records!=='object'||Array.isArray(incoming.records))throw new Error('Not a version 1 Forge notes backup.');
      const allowed=new Set([...catalog.challenges.map(c=>c.id),'sandbox','notebook','prompt','experiment','failure','incubator']);
      const clean={};
      for(const [id,value] of Object.entries(incoming.records)){
        if(!allowed.has(id)||!value||typeof value!=='object'||Array.isArray(value))throw new Error('Unknown workspace or invalid record.');
        if(!Array.isArray(value.checks)||value.checks.length>100||!value.checks.every(v=>typeof v==='boolean'||v===null))throw new Error('Invalid checklist.');
        if(!value.notes||typeof value.notes!=='object'||Array.isArray(value.notes)||Object.keys(value.notes).length>30)throw new Error('Invalid notes.');
        const notes={};for(const [name,text] of Object.entries(value.notes)){if(['__proto__','constructor','prototype'].includes(name)||name.length>100||typeof text!=='string'||text.length>10000)throw new Error('Invalid note field.');notes[name]=text;}
        if(value.input!==undefined&&(typeof value.input!=='string'||value.input.length>30000))throw new Error('Invalid practice input.');
        clean[id]={checks:value.checks.map(Boolean),notes,...(value.input!==undefined?{input:value.input}:{})};
      }
      if(!confirm('Replace saved learning notes with this backup? Download a backup first if needed.'))return;
      localStorage.setItem(key,JSON.stringify(clean));forgeUnsavedDrafts.clear();panel.remove();mountWorkspace(route,catalog,view);
    }catch(error){status.textContent='Restore failed: '+error.message+' Existing notes were kept.';}finally{event.target.value='';}
  };
  const chooser=panel.querySelector('#workshop-choice');if(chooser)chooser.onchange=()=>{location.hash='community?workspace='+chooser.value;};
  const count=()=>{panel.querySelector('#practice-count').hidden=checks.length===0;panel.querySelector('#practice-count').textContent=`${checks.filter((_,i)=>record.checks[i]).length} of ${checks.length} criteria self-checked`;};count();
  panel.querySelectorAll('[data-check]').forEach(el=>el.addEventListener('change',()=>{record.checks[Number(el.dataset.check)]=el.checked;count();save();}));
  panel.querySelectorAll('[data-note]').forEach(el=>el.addEventListener('input',()=>{record.notes[fields[Number(el.dataset.note)]]=el.value;save();}));
  if(challenge && route==='challenge') {
    const input=panel.querySelector('#practice-input');input.value=typeof record.input==='string'?record.input:JSON.stringify(challenge.example,null,2);
    input.addEventListener('input',()=>{record.input=input.value;save();});
    panel.querySelector('#reset-input').onclick=()=>{input.value=JSON.stringify(challenge.example,null,2);record.input=input.value;save();};
    panel.querySelector('#check-input').onclick=()=>{const out=panel.querySelector('#input-result');try {const value=JSON.parse(input.value);const array=Array.isArray(challenge.example);if (value===null || typeof value!=='object' || Array.isArray(value)!==array) throw new Error(array?'Expected a JSON array.':'Expected a JSON object.');const missing=array?[]:Object.keys(challenge.example).filter(k=>!Object.hasOwn(value,k));if(missing.length)throw new Error('Missing example fields: '+missing.join(', '));out.textContent='JSON structure matches the example. This does not test your implementation.\nExpected behavior to investigate: '+challenge.expected+'\nBoundary checks: '+challenge.edgeCases;}catch(error){out.textContent='Input needs attention: '+error.message;}};
  }
  panel.querySelector('#export-evidence').onclick=()=>download(`forge-${recordKey}-evidence.md`,`# ${challenge?challenge.id+' — '+challenge.title:recordKey}\n\nSelf-reported practice; not reviewed or verified.\n\n${checks.map((c,i)=>`- [${record.checks[i]?'x':' '}] ${c}`).join('\n')}\n\n${fields.map(f=>`## ${f}\n${record.notes[f]||'Not recorded'}`).join('\n\n')}\n\n## Practice input\n${record.input??(challenge?JSON.stringify(challenge.example,null,2):'Not recorded')}\n`);
  panel.querySelector('#clear-work').onclick=()=>{if(!confirm('Delete notes and checklist for this workspace from this browser?'))return;delete saved[recordKey];if(!save()){saved[recordKey]=record;return;}panel.remove();mountWorkspace(route,catalog,view);};
}

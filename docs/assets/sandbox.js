/* A documentation-only rehearsal. No GitHub writes or code execution. */
function sandboxView() {
  return `<div class="route"><section class="page-hero"><div class="shell"><span class="bracket-label">LEARN BY PRACTICING</span><h1 class="page-title">First PR <span>Sandbox</span></h1><p class="page-deck">Practice fork, branch, edit, commit, pull request, review and merge right here. This local simulation does not change GitHub or award verification.</p></div></section><section class="section shell" id="sandbox-app"></section></div>`;
}

function mountSandbox() {
  const host = document.querySelector('#sandbox-app');
  if (!host) return;
  const key='forge-sandbox-v1';
  const original='# Clear contribution instructions\n\nChange the thing, save it, then submit it.\n';
  const fresh=()=>({stage:0,branch:'',draft:original,committed:'',message:'',base:'',feedback:false,reviewed:false,merged:false});
  let model=fresh(), storageError='';
  try {
    const raw=localStorage.getItem(key);
    if(raw){const parsed=JSON.parse(raw);if(!parsed || !Number.isInteger(parsed.stage) || parsed.stage<0 || parsed.stage>7)throw new Error('Invalid saved practice');model={...fresh(),...parsed};for(const field of ['branch','draft','committed','message','base'])if(typeof model[field]!=='string'||model[field].length>15000)throw new Error('Invalid saved practice');}
  } catch { model=fresh();storageError='Saved practice could not be read. You can rehearse in this tab; export your work before leaving.'; }
  const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const persist=()=>{if(storageError)return;try{localStorage.setItem(key,JSON.stringify(model));}catch{storageError='Storage is unavailable. Your rehearsal stays in this tab; export it before leaving.';}};
  const message=text=>{host.querySelector('#sandbox-status').textContent=text;};
  const steps=['Fork','Branch','Edit','Commit','Pull request','Review','Merge'];
  function render(){
    const stage=model.stage;
    host.innerHTML=`<div class="sandbox-layout"><aside class="aside-card"><h2>Your practice journey</h2><ol>${steps.map((s,i)=>`<li ${i===stage?'aria-current="step"':''}>${i<stage?'✓ ':''}${s}${i===stage?' — current':''}</li>`).join('')}</ol><p>${model.branch?'Branch: '+escape(model.branch):'Repository: your practice fork'}</p><p>Progress belongs to this browser. It is separate from a real contribution.</p><a href="https://github.com/silentiumlabsio/maestro-forge/blob/main/first-pr-sandbox/README.md">Take these steps to GitHub →</a></aside><article class="feature-panel workspace"><h2>${stage===7?'Practice merge complete':steps[stage]}</h2><div id="sandbox-step"></div><p id="sandbox-status" role="status">${escape(storageError)}</p><div class="card-actions"><button class="button" id="sandbox-export">Export practice record</button><button class="button" id="sandbox-reset">Start over</button></div></article></div>`;
    const content=host.querySelector('#sandbox-step');
    const button=(id,label)=>`<button class="button button-primary" id="${id}">${label}</button>`;
    if(stage===0)content.innerHTML='<p>A fork is your own copy of a repository. You can practice without changing the original.</p>'+button('sandbox-next','Create practice fork');
    if(stage===1)content.innerHTML='<p>A branch keeps one proposed change separate from main. Choose a descriptive name, such as practice/clear-steps.</p><label>Branch name<input id="sandbox-branch" maxlength="80" value="'+escape(model.branch)+'"></label>'+button('sandbox-next','Create branch');
    if(stage===2)content.innerHTML='<p>Rewrite the vague instruction into three numbered steps. Include checking the branch, previewing the edit, and confirming the pull request base. Use original Markdown text.</p><label>practice-card.md<textarea id="sandbox-editor" rows="10" maxlength="15000">'+escape(model.draft)+'</textarea></label><h3>Text preview</h3><pre id="sandbox-preview"></pre>'+button('sandbox-next','Review my edit');
    if(stage===3)content.innerHTML='<p>A commit saves a snapshot on your branch. Explain the change with a specific message.</p><label>Commit message<input id="sandbox-message" maxlength="160" value="'+escape(model.message)+'"></label><h3>Before</h3><pre>'+escape(original)+'</pre><h3>Your proposed text</h3><pre>'+escape(model.draft)+'</pre>'+button('sandbox-next','Commit this snapshot');
    if(stage===4)content.innerHTML='<p>A pull request compares your branch with a target base. Choose your fork’s main branch for this rehearsal.</p><label>Base branch<select id="sandbox-base"><option value="">Choose a target</option><option value="fork">My practice fork / main</option><option value="upstream">Original Forge repository / main</option></select></label><p>Head branch: '+escape(model.branch)+'</p>'+button('sandbox-next','Open practice pull request');
    if(stage===5)content.innerHTML='<p><strong>Simulated reviewer:</strong> Check that your instructions explicitly name the branch, preview and base. These comments are teaching prompts, not a human review.</p><pre>'+escape(model.committed)+'</pre><label><input type="checkbox" id="sandbox-review"> I inspected the committed text and can identify those three details.</label>'+button('sandbox-next','Record practice review')+' <button class="button" id="sandbox-revise">Revise my text</button>';
    if(stage===6)content.innerHTML='<p>Your practice review is recorded for this snapshot. Merging brings the committed text into your fork’s main branch. Real upstream merges require an authorized maintainer and repository checks.</p>'+button('sandbox-next','Merge into practice main');
    if(stage===7)content.innerHTML='<p>You completed a local rehearsal. Your practice main now contains:</p><pre>'+escape(model.committed)+'</pre><p>Next: repeat the process in your GitHub fork, or <a href="#challenges">start a challenge</a>. This rehearsal has not created a real GitHub PR.</p>';
    const editor=host.querySelector('#sandbox-editor');if(editor){host.querySelector('#sandbox-preview').textContent=model.draft;editor.oninput=()=>{model.draft=editor.value;host.querySelector('#sandbox-preview').textContent=model.draft;persist();};}
    host.querySelector('#sandbox-revise')?.addEventListener('click',()=>{model.stage=2;model.reviewed=false;persist();render();});
    host.querySelector('#sandbox-next')?.addEventListener('click',()=>{
      if(stage===1){const name=host.querySelector('#sandbox-branch').value.trim();if(!/^[a-zA-Z0-9][a-zA-Z0-9/_-]{2,79}$/.test(name)||name==='main'||name.includes('//')||name.endsWith('/'))return message('Choose a descriptive practice branch using letters, numbers, /, - or _. Do not use main.');model.branch=name;}
      if(stage===2){if(model.draft===original||model.draft.trim().length<50||![1,2,3].every(n=>new RegExp('^'+n+'\\.\\s+.+','m').test(model.draft)))return message('Write three numbered steps (1., 2., 3.) before continuing.');}
      if(stage===3){const value=host.querySelector('#sandbox-message').value.trim();if(value.length<8)return message('Write a specific commit message of at least eight characters.');model.message=value;model.committed=model.draft;model.reviewed=false;}
      if(stage===4){if(host.querySelector('#sandbox-base').value!=='fork')return message('For this rehearsal, select your own fork / main. Upstream is for a real contribution that maintainers review.');model.base='fork';}
      if(stage===5){if(!host.querySelector('#sandbox-review').checked)return message('Inspect the snapshot and check the review statement, or revise your text.');if(!['branch','preview','base'].every(word=>model.committed.toLowerCase().includes(word)))return message('The practice check could not find branch, preview and base in your committed text. Revise the instructions to make each explicit.');model.reviewed=true;}
      if(stage===6){if(!model.reviewed||model.committed!==model.draft)return message('The current snapshot needs review before merging.');model.merged=true;}
      model.stage++;persist();render();host.querySelector('article h2').tabIndex=-1;host.querySelector('article h2').focus();
    });
    host.querySelector('#sandbox-reset').onclick=()=>{if(confirm('Start a new rehearsal? Export first if you want to keep this record.')){model=fresh();storageError='';persist();render();}};
    host.querySelector('#sandbox-export').onclick=()=>{const text=`# First PR local rehearsal\n\nThis is a simulation, not a GitHub contribution or verification.\nStage: ${model.stage}/7\nBranch: ${model.branch}\nCommit message: ${model.message}\n\n## Draft\n${model.draft}\n\n## Committed snapshot\n${model.committed}\n`;const url=URL.createObjectURL(new Blob([text],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download='forge-pr-rehearsal.md';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
  }
  render();
}

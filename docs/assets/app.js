const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const icon = name => `<svg aria-hidden="true"><use href="assets/icons.svg#i-${name}"></use></svg>`;
const escapeHTML = value => String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));

const state = {challenges:[], paths:[], resources:[], ecosystem:[], achievements:[], projects:[], builders:[], ideas:[], verifications:[], trustStates:[]};
const view = $('#route-view');
const dataFiles = [
  ['challenges','challenges'],['learning-paths','paths'],['resources','resources'],['ecosystem','ecosystem'],
  ['achievements','achievements'],['projects','projects'],['builders','builders'],['ideas','ideas'],
  ['verifications','verifications'],['trust-states','trustStates']
];

function repoContext() {
  const host = location.hostname;
  const parts = location.pathname.split('/').filter(Boolean);
  if (host.endsWith('.github.io') && parts.length) {
    const owner = host.slice(0, -10);
    const repo = parts[0];
    return {published:true, url:`https://github.com/${owner}/${repo}`};
  }
  return {published:false, url:'..'};
}
const repo = repoContext();
const issueLink = template => `${repo.published ? repo.url : 'https://github.com/silentiumlabsio/maestro-forge'}/issues/new?template=${encodeURIComponent(template)}`;
const repoLink = path => repo.published ? `${repo.url}/${path}` : `../${path.replace(/^blob\/main\//,'')}`;
const safeLink = href => /^(?:https:\/\/|#|\.\.\/|assets\/)/.test(href) ? escapeHTML(href) : '#home';
const canonicalRepo = 'https://github.com/silentiumlabsio/maestro-forge';

// The Pages deployment contains /docs only. Repository guides live on GitHub.
function resolveContentLinks(root = document) {
  $$('a[href]', root).forEach(link => {
    const href = link.getAttribute('href');
    if (href.startsWith('../')) {
      let path = href.slice(3).replace(/^blob\/main\//, '');
      if (path.startsWith('.github/ISSUE_TEMPLATE/')) {
        link.href = `${canonicalRepo}/issues/new?template=${encodeURIComponent(path.split('/').pop())}`;
      } else {
        if (path.endsWith('/')) path += 'README.md';
        link.href = `${canonicalRepo}/blob/main/${path}`;
      }
    }
  });
}

function challengeDetailView() {
  const id = new URLSearchParams(location.hash.split('?')[1] || '').get('id');
  const item = state.challenges.find(x => x.id === id);
  if (!item) return `<div class="route">${pageHero('CHALLENGE','Choose a','Build','That challenge ID was not found.')}<section class="section shell"><a class="button" href="#challenges">Back to catalog</a></section></div>`;
  return `<div class="route challenge-detail">${pageHero(`${item.id} · ${item.difficulty} · v${item.version}`, item.title, '', item.summary)}
    <section class="section shell"><a class="section-action" href="#challenges">← All challenges</a>
      <div class="split-feature"><article class="feature-panel"><h2>Start your build</h2><p>${escapeHTML(item.runtime)}</p><p>${escapeHTML(item.firstStep)}</p><p>${escapeHTML(item.starterContract)}</p><div class="card-actions"><a class="button button-primary" href="${repoLink(item.startPath)}">Start guide →</a><a class="button" href="${repoLink(item.starterPath)}">Unfinished starter →</a><a class="button" href="${repoLink(item.path)}">Full brief →</a></div></article>
      <article class="feature-panel"><h2>Check your first milestone</h2><pre class="example-data">${escapeHTML(JSON.stringify(item.example,null,2))}</pre><p>${escapeHTML(item.expected)}</p></article></div>
      <article class="feature-panel"><h2>Test failure cases</h2><p>${escapeHTML(item.edgeCases)}</p><a class="button" href="${repoLink(item.validationPath)}">Validation checklist →</a>${item.kit ? `<a class="button" href="${repoLink(item.kit)}">Starter kit →</a>` : ''}</article>
      <div class="cta-band"><div><h2>Keep the solution in your repository.</h2><p>Scaffolding and examples are teaching material. Record actual checks, declare behavior and submit an exact commit for review.</p></div><a class="button button-primary" href="../handbook/SUBMITTING.md">How to submit →</a><a class="button" href="${issueLink('claim-challenge.yml')}&title=${encodeURIComponent(`Claim ${item.id} — ${item.title}`)}">Claim ${escapeHTML(item.id)} →</a></div>
    </section></div>`;
}

function routeLink(item) {
  if (item.issue) return issueLink(item.issue);
  if (item.route) return `#${item.route}`;
  return safeLink(item.href || '#home');
}

function pageHero(label, title, accent, deck, actions = '') {
  return `<section class="page-hero"><div class="shell page-hero-inner"><div><span class="bracket-label">${escapeHTML(label)}</span><h1 class="page-title">${escapeHTML(title)} <span>${escapeHTML(accent)}</span></h1><p class="page-deck">${escapeHTML(deck)}</p></div>${actions ? `<div class="page-hero-actions">${actions}</div>` : ''}</div></section>`;
}

function homeView() {
  const challengeCounts = ['Beginner','Intermediate','Advanced'].map(level => state.challenges.filter(x => x.difficulty === level).length);
  const pillars = [
    ['code','Build','Challenges, starter kits, community projects, and first contributions.','challenges'],
    ['book','Learn','Paths, original notes, cheat sheets, patterns, and secure guidance.','learn'],
    ['flask','Experiment','Prompt Lab, AI experiments, and blameless failure writeups.','community'],
    ['users','Collaborate','Incubator, ideas, builders, reviews, roles, and requests.','community'],
    ['upload','Share','Project metadata, architecture, journals, and original writeups.','projects'],
    ['growth','Grow','Forge Passport, evidence-based skills, achievements, and Trials.','builders'],
    ['shield','Protect','Zero-trust contribution handling, provenance, privacy, and response.','security']
  ];
  return `<div class="route home-route">
    <section class="hero"><div class="shell hero-inner">
      <div class="hero-copy"><span class="bracket-label">OPEN · SECURE · BY DESIGN</span><h1 class="display">MAESTRO <span>FORGE</span></h1><p class="hero-tagline">Learn. Build. Contribute. Securely.</p><p class="hero-lede">An independent open-source community ecosystem where Maestro students practice real skills, publish evidence, find collaborators, and contribute through a security-conscious workflow.</p>
        <div class="hero-actions"><a class="button button-primary" href="#challenges">Explore 24 challenges ${icon('arrow')}</a><a class="button" href="#community">Enter the community ${icon('arrow')}</a></div>
        <div class="attribution"><span>${icon('flask')}Created and maintained by <strong>Silentium Labs</strong></span><span>${icon('shield')}Independent community project for Maestro students</span></div>
      </div><div class="hero-visual" aria-hidden="true"><div class="forge-emblem"><div class="emblem-m"></div></div></div>
    </div></section>
    <section class="section shell"><div class="section-head"><div><span class="eyebrow">THE ECOSYSTEM</span><h2>Seven pillars. One safe path forward.</h2><p>Build practical work, understand it, improve it with others, and preserve trustworthy evidence of what you can do.</p></div><a class="section-action" href="#contribute">START CONTRIBUTING →</a></div>
      <div class="pillar-grid">${pillars.map((p,i)=>`<article class="pillar-card" data-index="0${i+1}"><div class="pillar-icon">${icon(p[0])}</div><h3>${p[1]}</h3><p>${p[2]}</p><a href="#${p[3]}">Explore ${p[1]} →</a></article>`).join('')}</div>
      <div class="signal-strip"><div class="signal">${icon('code')}<div><strong>${state.challenges.length}</strong><span>Silentium Labs launch challenges</span></div></div><div class="signal">${icon('book')}<div><strong>${state.paths.length}</strong><span>structured learning paths</span></div></div><div class="signal">${icon('shield')}<div><strong>70 + 30</strong><span>build review + skill verification</span></div></div><div class="signal">${icon('lock')}<div><strong>Static first</strong><span>GitHub-native community flows</span></div></div></div>
    </section>
    <section class="section shell"><div class="section-head"><div><span class="eyebrow">FAIR RECOGNITION</span><h2>We score demonstrated ability.</h2><p>AI assistance is allowed. Tool choice, money, hardware, popularity, and speed do not determine skill recognition.</p></div><a class="section-action" href="../SKILL_VERIFICATION.md">READ THE FULL RUBRIC →</a></div>
      <div class="split-feature"><article class="feature-panel"><span class="eyebrow">100-POINT MODEL</span><h3>Build quality is only the beginning.</h3><div class="scorebar" aria-label="Build Review 70 points, Explain 10, Debug 10, Adapt 10"><span>BUILD REVIEW · 70</span><span>EXPLAIN · 10</span><span>DEBUG · 10</span><span>ADAPT · 10</span></div><p>A working artifact may earn Build Reviewed status. Skill Verified requires the builder to explain, debug, and adapt their own exact submission.</p></article>
      <article class="feature-panel"><span class="eyebrow">RESOURCE FAIRNESS</span><h3>Skills, not subscriptions.</h3><ul class="feature-list"><li>${icon('check')}Official ranked challenges are reasonably completable with free or common resources.</li><li>${icon('check')}No AI-generated-code detector is used for scoring or accusations.</li><li>${icon('check')}No points for followers, stars, likes, commit volume, account age, or completion speed.</li><li>${icon('check')}Paid APIs must have a free, mock, or reference path where practical.</li></ul></article></div>
    </section>
    <section class="section shell"><div class="section-head"><div><span class="eyebrow">TRUST ARCHITECTURE</span><h2>Open contribution without blind trust.</h2><p>Student applications and challenge solutions remain in contributor-owned repositories. Forge stores reviewed metadata, evidence, links, learning content, and platform code.</p></div><a class="section-action" href="#security">INSPECT THE SECURITY MODEL →</a></div>
      <div class="trust-flow"><article class="trust-step"><b>01 · EXTERNAL</b><strong>Contributor-owned code</strong><p>Repositories, submissions, and external links begin untrusted.</p></article><article class="trust-step"><b>02 · STATIC</b><strong>Metadata and policy gates</strong><p>Declared behavior and changed files are inspected without executing community code.</p></article><article class="trust-step"><b>03 · HUMAN</b><strong>Scoped review</strong><p>Maintainers inspect source, evidence, dependencies, provenance, and risk.</p></article><article class="trust-step"><b>04 · RECORD</b><strong>Exact-commit evidence</strong><p>Verification binds to the repository URL, commit SHA, versions, reviewer, date, and score.</p></article></div>
    </section>
    <section class="section shell"><div class="cta-band"><div><h2>Choose something worth building.</h2><p>${challengeCounts.join(' · ')} launch challenges across Beginner, Intermediate, and Advanced tracks.</p></div><a class="button button-primary" href="#challenges">Browse the catalog ${icon('arrow')}</a></div></section>
  </div>`;
}

function challengeCard(item) {
  const claim = issueLink('claim-challenge.yml');
  return `<article class="catalog-card" data-search="${escapeHTML([item.id,item.title,item.summary,item.category,...item.skills,...item.languages].join(' ').toLowerCase())}"><div class="card-top"><span class="challenge-id">${escapeHTML(item.id)} · v${escapeHTML(item.version)}</span><span class="difficulty ${escapeHTML(item.difficulty)}">● ${escapeHTML(item.difficulty)}</span></div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.summary)}</p><div class="pills">${item.skills.slice(0,4).map(skill=>`<span class="pill">${escapeHTML(skill)}</span>`).join('')}</div><div class="card-actions"><a class="button" href="#challenge?id=${encodeURIComponent(item.id)}">Start challenge ${icon('external')}</a><a class="button button-primary" href="${claim}">Claim ${icon('arrow')}</a></div></article>`;
}

function challengesView() {
  const categories = [...new Set(state.challenges.map(x=>x.category))].sort();
  return `<div class="route">${pageHero('SILENTIUM LABS CATALOG','Build','Challenges','Twenty-four practical briefs created and curated by Silentium Labs. Multiple builders may solve the same challenge, using free or common resources.',`<a class="button" href="${issueLink('challenge-proposal.yml')}">Propose a challenge ${icon('arrow')}</a>`)}
    <div class="toolbar"><div class="shell toolbar-inner"><label class="field">${icon('search')}<span class="sr-only">Search challenges</span><input id="challenge-search" type="search" placeholder="Search ID, title, skill, or language"></label><label class="field"><span class="sr-only">Difficulty</span><select id="challenge-difficulty"><option value="all">All difficulties</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label><label class="field"><span class="sr-only">Category</span><select id="challenge-category"><option value="all">All categories</option>${categories.map(c=>`<option>${escapeHTML(c)}</option>`).join('')}</select></label><button id="challenge-reset" class="button" type="button">Reset</button></div></div>
    <section class="section-compact shell"><div class="catalog-layout"><div><div class="section-head"><div><span class="eyebrow">CATALOG</span><h2 id="challenge-heading">Choose your next build.</h2></div><span id="challenge-count" class="eyebrow"></span></div><div id="challenge-grid" class="card-grid">${state.challenges.map(challengeCard).join('')}</div></div>
      <aside class="catalog-aside" aria-label="Challenge policies"><article class="aside-card"><h3>Fair scoring</h3><p><strong>70</strong> Build Review points plus <strong>30</strong> skill verification points.</p><a href="../SKILL_VERIFICATION.md">Open the rubric →</a></article><article class="aside-card"><h3>AI allowed</h3><p>AI use is not penalized or rewarded. Builders remain responsible for their work.</p><a href="../AI_ASSISTANCE_POLICY.md">Read the policy →</a></article><article class="aside-card"><h3>Solutions stay yours</h3><p>Keep solution code in your own repository. Submit exact-commit evidence for review.</p><a href="../UNTRUSTED_CODE_POLICY.md">See the boundary →</a></article></aside></div>
    </section></div>`;
}

function learnView() {
  return `<div class="route">${pageHero('STRUCTURED JOURNEYS','Learning','Paths','Five suggested journeys connect stable challenge IDs into practical skill development. Paths are guidance, not prerequisites or certification.')}
    <section class="section shell"><div class="path-grid">${state.paths.map((path,i)=>`<article class="path-card"><span class="path-number">0${i+1}</span><h3>${escapeHTML(path.name)}</h3><p>${escapeHTML(path.description)}</p><p><a href="${repoLink(path.path)}">Preparation and checkpoints →</a></p><div class="challenge-sequence">${path.challengeIds.map(id=>`<a href="#challenge?id=${encodeURIComponent(id)}" title="Start ${id}">${escapeHTML(id)}</a>`).join('')}</div><div class="pills">${path.competencies.slice(0,3).map(c=>`<span class="pill">${escapeHTML(c)}</span>`).join('')}</div></article>`).join('')}</div>
      <div class="skill-map"><div class="section-head"><div><span class="eyebrow">EVIDENCE-BASED SKILL GRAPH</span><h2>Skills emerge from reviewed evidence.</h2><p>Forge does not infer mastery from page views or course progress. A skill graph can only grow from challenge requirements and exact-commit review records.</p></div></div><div class="skill-stages"><div class="skill-stage"><h3>Foundation</h3><div class="skill-nodes"><span class="skill-node">Git basics</span><span class="skill-node">Input validation</span><span class="skill-node">Documentation</span><span class="skill-node">Testing</span></div></div><div class="skill-stage"><h3>Applied</h3><div class="skill-nodes"><span class="skill-node">APIs</span><span class="skill-node">Persistence</span><span class="skill-node">Accessibility</span><span class="skill-node">Security review</span></div></div><div class="skill-stage"><h3>Synthesis</h3><div class="skill-nodes"><span class="skill-node">Architecture</span><span class="skill-node">Threat modeling</span><span class="skill-node">Evaluation</span><span class="skill-node">Adaptation</span></div></div></div></div>
    </section><section class="section shell"><div class="cta-band"><div><h2>New to open source?</h2><p>Practice the entire contribution loop without adding executable code.</p></div><a class="button button-primary" href="#sandbox">Open First PR Sandbox ${icon('arrow')}</a></div></section></div>`;
}

function emptyState(iconName, title, copy, action, href) {
  return `<div class="empty"><div class="hex-icon">${icon(iconName)}</div><h3>${escapeHTML(title)}</h3><p>${escapeHTML(copy)}</p><a class="button button-primary" href="${href}">${escapeHTML(action)} ${icon('arrow')}</a></div>`;
}

function projectsView() {
  const cards = state.projects.length ? state.projects.map(p=>`<article class="data-card"><span class="state">${escapeHTML(p.trustState || 'Untrusted')}</span><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.description)}</p><div class="pills">${(p.languages||[]).map(x=>`<span class="pill">${escapeHTML(x)}</span>`).join('')}</div><div class="card-actions"><a class="button" rel="noopener noreferrer" href="${escapeHTML(p.repositoryUrl)}">Repository ${icon('external')}</a></div></article>`).join('') : emptyState('upload','The showcase is ready for its first reviewed project','No project is featured until its metadata, external link, screenshots, declared behavior, and exact commit have passed the documented review path.','Submit your project',issueLink('project-submission.yml'));
  return `<div class="route">${pageHero('REAL WORK · REVIEWED EVIDENCE','Built in the','Forge','A curated project showcase that links to contributor-owned repositories. Forge does not import arbitrary student applications or claim unreviewed projects are safe.',`<a class="button button-primary" href="${issueLink('project-submission.yml')}">Submit a project ${icon('arrow')}</a>`)}
    <section class="section shell"><div class="section-head"><div><span class="eyebrow">PROJECT CATALOG</span><h2>Reviewed metadata. Contributor-owned source.</h2><p>Every future card displays its trust state and exact reviewed commit. A later commit never inherits an older verification.</p></div></div><div class="card-grid">${cards}</div></section>
    <section class="section shell"><div class="split-feature"><article class="feature-panel"><span class="eyebrow">PROJECT INCUBATOR</span><h3>Turn a scoped idea into a community build.</h3><p>Define the problem, roles, trust boundaries, and repository ownership before recruiting.</p><a class="button" href="${issueLink('community-project.yml')}">Propose a community project ${icon('arrow')}</a></article><article class="feature-panel"><span class="eyebrow">PROJECT PLANNING</span><h3>Start with decisions, tests, and risks.</h3><p>Use the project plan, architecture, test, security, ADR, release, and retrospective templates.</p><a class="button" href="../templates/project-planning/">Open planning templates ${icon('arrow')}</a></article></div></section></div>`;
}

function communityView() {
  const categories = ['all','Build','Learn','Experiment','Collaborate','Share','Grow','Protect'];
  return `<div class="route">${pageHero('COLLABORATE · LEARN · SHIP','Community','Forge','A static-first community hub powered by GitHub Issues, pull requests, and contributor-owned repositories—without fake sign-in, live activity, or online counts.',`<a class="button button-primary" href="#contribute">Find your contribution path ${icon('arrow')}</a>`)}
    <section class="section shell"><div class="tabs" role="tablist" aria-label="Ecosystem pillar filter">${categories.map((x,i)=>`<button class="tab" role="tab" aria-selected="${i===0}" data-pillar="${x}">${x === 'all' ? 'All systems' : x}</button>`).join('')}</div><div id="ecosystem-grid" class="ecosystem-grid">${state.ecosystem.map((item,i)=>ecosystemCard(item,i)).join('')}</div></section>
    <section class="section shell"><div class="cta-band"><div><h2>Ask for the kind of review you need.</h2><p>Code, documentation, UI/UX, accessibility, testing, security, and architecture reviews are first-class contributions.</p></div><a class="button button-primary" href="${issueLink('review-request.yml')}">Request a review ${icon('arrow')}</a></div></section></div>`;
}

function ecosystemCard(item, index) {
  const iconMap={Build:'code',Learn:'book',Experiment:'flask',Collaborate:'users',Share:'upload',Grow:'growth',Protect:'shield'};
  return `<article class="ecosystem-card" data-pillar="${escapeHTML(item.pillar)}"><span class="state">${escapeHTML(item.state)}</span><div class="hex-icon">${icon(iconMap[item.pillar] || 'code')}</div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.description)}</p><a href="${routeLink(item)}">${escapeHTML(item.action)} →</a></article>`;
}

function resourcesView() {
  return `<div class="route">${pageHero('ORIGINAL · ANNOTATED · PUBLIC-SAFE','Resource','Vault','Reviewed learning material with a reason for every inclusion. Restricted course materials, answer keys, copied textbooks, and unlicensed content do not belong here.',`<a class="button" href="${issueLink('resource-submission.yml')}">Suggest a resource ${icon('arrow')}</a>`)}
    <section class="section shell"><div class="resource-grid">${state.resources.map(r=>`<article class="resource-card"><span class="eyebrow">${escapeHTML(r.kind)} · ${escapeHTML(r.area)}</span><h3>${escapeHTML(r.title)}</h3><p>${escapeHTML(r.description)}</p><span class="source">${escapeHTML(r.trust)} · ${escapeHTML(r.source)}</span><a href="${safeLink(r.href)}">Open resource →</a></article>`).join('')}</div></section>
    <section class="section shell"><div class="section-head"><div><span class="eyebrow">RESOURCE TRACKS</span><h2>Learning material is a contribution.</h2><p>Original Student Notes, cheat sheets, Git/GitHub guides, secure coding, architecture, build journals, documentation, design, accessibility, and translation of Forge-owned material all have review paths.</p></div></div><div class="policy-grid"><article class="policy-card">${icon('book')}<h3>Original Student Notes</h3><p>Share original explanations and examples—not restricted Maestro materials or graded answer banks.</p><a href="../ACADEMIC_INTEGRITY.md">Integrity policy →</a></article><article class="policy-card">${icon('shield')}<h3>Secure Coding Cookbook</h3><p>Defensive, first-party guidance from Silentium Labs with safe defaults and explicit limitations.</p><a href="../resources/secure-coding-cookbook.md">Open cookbook →</a></article><article class="policy-card">${icon('code')}<h3>Architecture & Journals</h3><p>Document context, trust boundaries, tradeoffs, failures, decisions, and what changed after review.</p><a href="../resources/architecture-gallery.md">Open the guide →</a></article></div></section></div>`;
}

function buildersView() {
  const profiles = state.builders.length ? state.builders.map(b=>`<article class="data-card"><span class="state">Opt-in profile</span><h3>${escapeHTML(b.handle)}</h3><p>${escapeHTML(b.summary)}</p></article>`).join('') : emptyState('users','Builder directory is accepting opt-ins','Be the first to opt in. Share a public GitHub handle, interests, preferred roles and availability.','Opt in with a GitHub handle',issueLink('builder-profile.yml'));
  return `<div class="route">${pageHero('PORTABLE · EVIDENCE-BASED','Forge','Passport','An opt-in builder profile and export model derived from reviewed contributions and exact-commit verification—not self-claimed scores, popularity, or personal data.',`<a class="button button-primary" href="${issueLink('builder-profile.yml')}">Create a builder profile ${icon('arrow')}</a>`)}
    <section class="section shell"><div class="passport-layout"><article class="passport-card"><div class="avatar" aria-hidden="true">@</div><div><span class="eyebrow">PROFILE SCHEMA</span><h2>@github-handle</h2><p>Skills · interests · preferred roles · availability</p></div><div class="actions"><span class="pill">Opt-in only</span> <span class="pill">No legal name required</span> <span class="pill">Exact-commit evidence</span></div></article><div class="passport-details"><article class="evidence-panel"><h3>A profile is an evidence index.</h3><p>Manual Passport templates are available in Markdown and JSON; automated export is planned. Verification records bind the challenge and rubric versions, repository URL, commit SHA, reviewer, date, and score breakdown.</p><div class="evidence-grid"><div><strong>70</strong><span>Build Review</span></div><div><strong>10</strong><span>Explain</span></div><div><strong>10</strong><span>Debug</span></div><div><strong>10</strong><span>Adapt</span></div></div></article><article class="evidence-panel"><h3>Skill graph inputs</h3><p>Only reviewed challenge competencies and accepted contribution evidence may create graph nodes. GitHub followers, stars, likes, raw commits, and account age are excluded.</p></article></div></div></section>
    <section class="section shell"><div class="section-head"><div><span class="eyebrow">BUILDER DIRECTORY</span><h2>Find a builder.</h2><p>Profiles are empty until real community members explicitly opt in.</p></div></div><div class="card-grid">${profiles}</div></section>
    <section class="section shell"><div class="section-head"><div><span class="eyebrow">ACHIEVEMENT RULES</span><h2>Recognition with auditable evidence.</h2><p>Badges describe completed Forge criteria. They are not professional certification, academic credit, or official Maestro accreditation.</p></div></div><div class="badge-grid">${state.achievements.map(a=>`<article class="badge"><div class="hex-icon">${icon(a.category==='Protect'?'shield':a.category==='Learn'?'book':a.category==='Collaborate'?'users':'growth')}</div><strong>${escapeHTML(a.name)}</strong><p>${escapeHTML(a.description)}</p><span class="eyebrow">EVIDENCE: ${escapeHTML(a.evidence)}</span></article>`).join('')}</div></section></div>`;
}

function securityView() {
  const steps=[['External','Untrusted links, repositories, issues, screenshots, and metadata'],['Metadata gate','Changed-file and policy checks without contributor code execution'],['Static triage','Source treated as data; findings are leads, never a safety guarantee'],['Human review','Scope, behavior, dependencies, links, privacy, and provenance inspected'],['Exact record','Versions, repository URL, commit SHA, reviewer, date, and score bound'],['Monitor','Quarantine, revoke, or archive if trust conditions change']];
  return `<div class="route">${pageHero('ZERO TRUST · HUMAN REVIEW','Secure by','Design','Every community contribution can be malicious until reviewed. Maestro Forge minimizes the code it hosts, prevents privileged execution of unknown submissions, and preserves exact provenance.',`<a class="button button-primary" href="../SECURITY.md">Report privately ${icon('shield')}</a>`)}
    <section class="section shell"><div class="section-head"><div><span class="eyebrow">CONTRIBUTION LIFECYCLE</span><h2>Trust is recorded, scoped, and revocable.</h2><p>Automated checks support reviewers; they never replace judgment or guarantee vulnerability-free content.</p></div></div><div class="security-flow">${steps.map((s,i)=>`<article class="security-step"><span class="num">0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}.</p></article>`).join('')}</div></section>
    <section class="section shell"><div class="section-head"><div><span class="eyebrow">TRUST STATES</span><h2>A shared vocabulary for changing risk.</h2></div></div><div class="trust-grid">${state.trustStates.map(s=>`<article class="trust-state"><span class="eyebrow">${escapeHTML(s.id.toUpperCase())}</span><h3>${escapeHTML(s.label)}</h3><p>${escapeHTML(s.description)}</p></article>`).join('')}</div></section>
    <section class="section shell"><div class="split-feature"><article class="feature-panel"><span class="eyebrow">CORE REPOSITORY</span><h3>No arbitrary community execution.</h3><ul class="feature-list"><li>${icon('check')}No student project or challenge-solution execution in launch CI.</li><li>${icon('check')}No self-hosted maintainer runner for unknown community code.</li><li>${icon('check')}No untrusted PR head executed by a privileged pull_request_target workflow.</li><li>${icon('check')}No secrets exposed to untrusted pull requests.</li></ul></article><article class="feature-panel"><span class="eyebrow">SUBMISSION BOUNDARY</span><h3>Source first. Suspicious content escalated.</h3><p>Unexplained binaries, opaque or protected archives, obfuscation, symlink escapes, path traversal, submodules without approval, huge vendored trees, credential theft, persistence, phishing, spyware, miners, and hidden behavior are rejected or quarantined.</p><a class="button" href="../UNTRUSTED_CODE_POLICY.md">Read the complete policy ${icon('arrow')}</a></article></div></section>
    <section class="section shell"><div class="policy-grid"><article class="policy-card">${icon('lock')}<h3>Private reporting</h3><p>Do not expose live credentials, private student data, or weaponized details in a public issue.</p><a href="../SECURITY.md">Security policy →</a></article><article class="policy-card">${icon('users')}<h3>Minimal identity</h3><p>GitHub handles by default. No legal names, personal emails, student IDs, grades, or precise locations required.</p><a href="../PRIVACY.md">Privacy policy →</a></article><article class="policy-card">${icon('external')}<h3>External links</h3><p>Links are untrusted input: no automatic download, iframe, or inherited verification for later commits.</p><a href="../docs/SECURITY_MODEL.md">Security model →</a></article></div></section></div>`;
}

function contributeView() {
  const tracks=[
    ['code','Claim a challenge','Build any official brief in your own repository; multiple solutions are welcome.',issueLink('claim-challenge.yml')],
    ['upload','Submit a project','Propose reviewed metadata and an exact contributor-owned repository commit.',issueLink('project-submission.yml')],
    ['flask','Propose a challenge','Community challenges move through Proposal, Review, Beta, and Community Challenge.',issueLink('challenge-proposal.yml')],
    ['users','Join the incubator','Propose a community build, an idea, a role, or a scoped request.',issueLink('community-project.yml')],
    ['shield','Request a review','Ask for code, docs, UI, accessibility, testing, security, or architecture feedback.',issueLink('review-request.yml')],
    ['book','Share a resource','Submit original or public-safe material with an annotation explaining its value.',issueLink('resource-submission.yml')],
    ['growth','Create a builder profile','Opt in with a GitHub handle, skills, interests, roles, and availability.',issueLink('builder-profile.yml')],
    ['code','Practice a first PR','Learn fork, branch, edit, commit, pull request, review, and merge safely.','../first-pr-sandbox/']
  ];
  return `<div class="route">${pageHero('YOUR FIRST CONTRIBUTION','Enter the','Forge','Code is one contribution path. Documentation, design, accessibility, translation of Forge-owned material, reviews, testing, ideas, planning, and original learning content are equally welcome.',`<a class="button button-primary" href="../CONTRIBUTING.md">Read contribution rules ${icon('arrow')}</a>`)}
    <section class="section shell"><div class="ecosystem-grid">${tracks.map((t,i)=>`<article class="ecosystem-card"><div class="hex-icon">${icon(t[0])}</div><h3>${t[1]}</h3><p>${t[2]}</p><a href="${t[3]}">Start here →</a></article>`).join('')}</div></section>
    <section class="section shell"><div class="section-head"><div><span class="eyebrow">SAFE CONTRIBUTION FLOW</span><h2>Fork. Focus. Declare. Review.</h2></div></div><div class="trust-flow"><article class="trust-step"><b>01</b><strong>Choose one goal</strong><p>Claim an issue or select a non-code track. Keep scope reviewable.</p></article><article class="trust-step"><b>02</b><strong>Work in a fork</strong><p>No direct community pushes to main. Do not add secrets or private data.</p></article><article class="trust-step"><b>03</b><strong>Declare behavior</strong><p>Document network, file, command, dependency, credential, and data behavior.</p></article><article class="trust-step"><b>04</b><strong>Pass review</strong><p>Open PRs remain untrusted until required checks and human review complete.</p></article></div></section>
    <section class="section shell"><div class="cta-band"><div><h2>Major platform changes start with an RFC.</h2><p>Use numbered proposals for architecture and governance decisions. Security controls cannot be weakened by popularity vote.</p></div><a class="button" href="../rfcs/">Read the RFC process ${icon('arrow')}</a></div></section></div>`;
}

const routes = {sandbox:sandboxView,home:homeView,challenges:challengesView,challenge:challengeDetailView,learn:learnView,resources:resourcesView,projects:projectsView,community:communityView,builders:buildersView,security:securityView,contribute:contributeView};

function currentRoute() {
  const raw = location.hash.slice(1).split('?')[0].toLowerCase();
  return routes[raw] ? raw : 'home';
}

function renderRoute() {
  const route = currentRoute();
  let markup;
  switch (route) {
    case 'sandbox': markup = sandboxView(); break;
    case 'challenge': markup = challengeDetailView(); break;
    case 'challenges': markup = challengesView(); break;
    case 'learn': markup = learnView(); break;
    case 'resources': markup = resourcesView(); break;
    case 'projects': markup = projectsView(); break;
    case 'community': markup = communityView(); break;
    case 'builders': markup = buildersView(); break;
    case 'security': markup = securityView(); break;
    case 'contribute': markup = contributeView(); break;
    default: markup = homeView();
  }
  view.innerHTML = markup;
  resolveContentLinks();
  $$('[data-route]').forEach(link => link.setAttribute('aria-current', link.dataset.route === route ? 'page' : 'false'));
  document.title = route === 'home' ? 'Maestro Forge — Learn. Build. Contribute. Securely.' : `${route[0].toUpperCase()+route.slice(1)} — Maestro Forge`;
  attachRouteEvents(route);
  mountWorkspace(route, state, view);
  mountSandbox();
  $('.primary-nav')?.classList.remove('open');
  $('.menu-button')?.setAttribute('aria-expanded','false');
  window.scrollTo(0,0);
}

function attachRouteEvents(route) {
  if (route === 'challenges') {
    const search=$('#challenge-search'), difficulty=$('#challenge-difficulty'), category=$('#challenge-category'), grid=$('#challenge-grid'), count=$('#challenge-count');
    const render=()=>{const q=search.value.trim().toLowerCase();const items=state.challenges.filter(x=>(difficulty.value==='all'||x.difficulty===difficulty.value)&&(category.value==='all'||x.category===category.value)&&(!q||[x.id,x.title,x.summary,x.category,...x.skills,...x.languages].join(' ').toLowerCase().includes(q)));grid.innerHTML=items.length?items.map(challengeCard).join(''):emptyState('search','No challenge matches','Try a broader search or reset the filters.','Reset filters','#challenges');count.textContent=`${items.length} OF ${state.challenges.length} BUILDS`;resolveContentLinks(grid);};
    [search,difficulty,category].forEach(el=>el.addEventListener('input',render));$('#challenge-reset').addEventListener('click',()=>{search.value='';difficulty.value='all';category.value='all';render();search.focus();});render();
  }
  if (route === 'community') {
    $$('.tab').forEach(tab=>tab.addEventListener('click',()=>{$$('.tab').forEach(x=>x.setAttribute('aria-selected','false'));tab.setAttribute('aria-selected','true');$$('.ecosystem-card').forEach(card=>card.hidden=tab.dataset.pillar!=='all'&&card.dataset.pillar!==tab.dataset.pillar);tab.focus();}));
  }
}

function buildSearchIndex() {
  return [
    ...Object.keys(routes).map(route=>({title:route==='home'?'Maestro Forge home':route[0].toUpperCase()+route.slice(1),type:'Page',href:`#${route}`,text:route})),
    ...state.challenges.map(x=>({title:`${x.id} — ${x.title}`,type:'Challenge',href:`#challenge?id=${encodeURIComponent(x.id)}`,text:[x.summary,x.category,...x.skills,...x.languages].join(' ')})),
    ...state.ecosystem.map(x=>({title:x.title,type:x.pillar,href:routeLink(x),text:x.description})),
    ...state.resources.map(x=>({title:x.title,type:x.kind,href:x.href,text:`${x.description} ${x.area}`})),
    ...state.paths.map(x=>({title:x.name,type:'Learning Path',href:repoLink(x.path),text:`${x.description} ${x.competencies.join(' ')}`}))
  ];
}

function initGlobalSearch() {
  const dialog=$('#search-dialog'), input=$('#global-search'), results=$('#global-results');let index=[];
  const render=()=>{const q=input.value.trim().toLowerCase();const matches=(q?index.filter(x=>`${x.title} ${x.type} ${x.text}`.toLowerCase().includes(q)):index.slice(0,8)).slice(0,12);results.innerHTML=matches.map(x=>`<a class="global-result" href="${safeLink(x.href)}"><strong>${escapeHTML(x.title)}</strong><span>${escapeHTML(x.type)}</span></a>`).join('')||'<p class="page-deck">No result. Try a broader term.</p>';resolveContentLinks(results);};
  const open=()=>{index=buildSearchIndex();dialog.showModal();input.value='';render();setTimeout(()=>input.focus(),0);};
  $('.search-trigger').addEventListener('click',open);$('.close-search').addEventListener('click',()=>dialog.close());input.addEventListener('input',render);results.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!/input|textarea|select/i.test(document.activeElement.tagName)){e.preventDefault();open();}});
}

function initMenu() {
  const button=$('.menu-button'), nav=$('.primary-nav');button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation');button.innerHTML=icon(open?'close':'menu');});
}

async function init() {
  try {
    const values=await Promise.all(dataFiles.map(([file])=>fetch(`data/${file}.json`).then(response=>{if(!response.ok)throw new Error(`${file}: ${response.status}`);return response.json();})));
    dataFiles.forEach(([,key],i)=>{state[key]=values[i];});
    initMenu();initGlobalSearch();window.addEventListener('hashchange',renderRoute);renderRoute();
  } catch (error) {
    view.innerHTML=`<div class="error-state"><h1>Catalog unavailable</h1><p>The structured data could not be loaded. Serve the docs folder through GitHub Pages or a local web server.</p></div>`;console.error(error);
  }
}

init();

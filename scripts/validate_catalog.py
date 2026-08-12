from pathlib import Path
import json, sys

root = Path(__file__).resolve().parents[1]
path = root / 'docs' / 'data' / 'challenges.json'
data = json.loads(path.read_text(encoding='utf-8'))
required = {'id','version','difficulty','category','title','summary','skills','languages','status','author','path'}
seen=set(); errors=[]
for i,item in enumerate(data):
    missing=required-item.keys()
    if missing: errors.append(f'item {i}: missing {sorted(missing)}')
    cid=item.get('id')
    if cid in seen: errors.append(f'duplicate id: {cid}')
    seen.add(cid)
    if item.get('difficulty') not in {'Beginner','Intermediate','Advanced'}:
        errors.append(f'{cid}: invalid difficulty')
    target = root / item.get('path','').replace('blob/main/','')
    if not target.exists(): errors.append(f'{cid}: missing brief {target.relative_to(root)}')
if errors:
    print('\n'.join(errors)); sys.exit(1)
print(f'Catalog OK: {len(data)} challenges')

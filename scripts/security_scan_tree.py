"""Maintainer-side static triage helper.

This script READS target files as data. It does not import or execute scanned source.
Findings are review leads, not proof of malware.
"""
from pathlib import Path
import argparse, re

BLOCKED = {'.exe','.dll','.msi','.scr','.apk','.ipa','.dmg','.pkg','.deb','.rpm','.jar','.class','.so','.dylib','.p12','.pfx','.pem','.key','.bat','.cmd','.ps1','.zip','.7z','.rar','.iso','.img'}
PATTERNS = {
    'dynamic-eval': re.compile(r'\b(eval|exec)\s*\('),
    'subprocess': re.compile(r'\b(subprocess\.|os\.system\s*\(|child_process\.)'),
    'socket-use': re.compile(r'\b(socket\.|net\.connect|createConnection)\b'),
    'encoded-blob': re.compile(r'[A-Za-z0-9+/]{240,}={0,2}'),
    'mining-indicator': re.compile(r'(?i)\b(xmrig|stratum\+tcp|cryptonight)\b'),
    'reverse-shell-indicator': re.compile(r'(?i)\b(nc\s+-e|bash\s+-i\s+>&|powershell.+downloadstring)\b'),
}

def inside(root: Path, p: Path) -> bool:
    try: p.resolve().relative_to(root.resolve()); return True
    except ValueError: return False

def main():
    ap=argparse.ArgumentParser(); ap.add_argument('target'); args=ap.parse_args()
    root=Path(args.target).resolve(); findings=[]
    for p in root.rglob('*'):
        if p.resolve() == Path(__file__).resolve():
            continue
        if '.git' in p.parts or '__pycache__' in p.parts:
            continue
        if p.is_symlink():
            if not inside(root,p.resolve()): findings.append((str(p),'symlink escapes target root'))
            continue
        if not p.is_file(): continue
        if p.suffix.lower() in BLOCKED: findings.append((str(p),'blocked/sensitive binary or script type'))
        if p.stat().st_size > 2_000_000: findings.append((str(p),'large file requires manual review')); continue
        try: text=p.read_text(encoding='utf-8', errors='ignore')
        except OSError as e: findings.append((str(p),f'unreadable: {e}')); continue
        for name,rx in PATTERNS.items():
            if rx.search(text): findings.append((str(p),f'pattern:{name}'))
    if findings:
        for f,r in findings: print(f'{r}: {f}')
        raise SystemExit(2)
    print('No configured static triage flags found. This is not a malware-free guarantee.')
if __name__=='__main__': main()

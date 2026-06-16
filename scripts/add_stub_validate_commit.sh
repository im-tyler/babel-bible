#!/bin/bash
# Usage: add_stub_validate_commit.sh <file_path> <concept_catalog_id> <title> <commit_message>
FILE="$1"
CATALOG_ID="$2"
TITLE="$3"
MSG="$4"

DOMAIN="${CATALOG_ID%%.*}"
ID_REST="${CATALOG_ID#*.}"

# Add stub to CONCEPT_CATALOG.md
python3 -c "
import re
with open('docs/catalogs/CONCEPT_CATALOG.md') as f:
    text = f.read()
stubs = '''
### ${CATALOG_ID}

- **title**: ${TITLE}
- **prerequisites**: *(to be determined)*
- **notes**: Stub
'''
m = list(re.finditer(r'### ${DOMAIN}\\\\.\\\\S+', text))
if m:
    last = m[-1].end()
    next_blank = text.find('\\n\\n', last)
    if next_blank >= 0:
        text = text[:next_blank+2] + stubs + text[next_blank+2:]
    else:
        text += stubs
else:
    text += stubs
with open('docs/catalogs/CONCEPT_CATALOG.md', 'w') as f:
    f.write(text)
print('Added stub')
"

# Validate
RESULT=$(python3 scripts/validate_unit.py "$FILE" 2>&1 | rg 'checks passed')
echo "$FILE: $RESULT"

# Commit
if echo "$RESULT" | rg -q '27/27'; then
    git add content/ docs/catalogs/CONCEPT_CATALOG.md site/public/img/
    git commit -m "$MSG"
    echo "Committed: $MSG"
else
    echo "VALIDATION FAILED - not committing"
fi

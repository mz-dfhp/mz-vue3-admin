module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --cache --cache-location node_modules/.cache/eslint/',
    'prettier --write --cache'
  ],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'prettier --write--parser json --cache'
  ],
  'package.json': ['prettier --write --cache'],
  '*.vue': [
    'eslint --fix --cache-location node_modules/.cache/eslint/',
    'prettier --write --cache ',
    'stylelint --fix --allow-empty-input --cache --cache-location node_modules/.cache/stylelint/'
  ],
  '*.{scss,less,styl,html}': [
    'stylelint --fix --allow-empty-input --cache --cache-location node_modules/.cache/stylelint/',
    'prettier --write --cache'
  ],
  '*.md': ['prettier --write --cache']
}

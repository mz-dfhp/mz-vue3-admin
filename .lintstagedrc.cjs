module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': 'eslint --cache --fix',
  'src/**/*.{css,scss}': 'stylelint --cache --fix --allow-empty-input',
  'src/**/*.vue': [
    'eslint --cache --fix',
    'stylelint --cache --fix --allow-empty-input'
  ]
}

// --allow-empty-input 参数防止意外提交卡顿。

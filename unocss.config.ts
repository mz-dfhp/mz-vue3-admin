import { presetUno, presetAttributify, presetIcons, defineConfig } from 'unoCSS'
export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  rules: [['aaa', { color: 'red' }]],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-between': 'flex justify-between items-center'
    }
  ],
  theme: {}
})

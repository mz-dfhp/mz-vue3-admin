import { presetUno, presetAttributify, presetIcons, defineConfig } from 'unocss'
export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  rules: [],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-between': 'flex justify-between items-center'
    }
  ],
  theme: {
    colors: {
      main: 'var(--el-color-primary)'
    }
  }
})

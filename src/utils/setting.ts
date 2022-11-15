export function setThemeColor(color: string) {
  const el: HTMLElement = document.documentElement
  const body = document.querySelector('body')
  el.style.setProperty('--el-color-primary', color)
  ;(body as HTMLBodyElement).style.setProperty('--van-primary-color', color)
}

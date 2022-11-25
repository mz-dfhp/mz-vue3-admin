export function setThemeColor(color: string) {
  type TColor = {
    [propName: string]: string | number
  }
  const el: HTMLElement = document.documentElement
  const colors: TColor = {
    '--el-color-primary': 1,
    '--el-color-primary-light-3': 0.7,
    '--el-color-primary-light-5': 0.5,
    '--el-color-primary-light-7': 0.3,
    '--el-color-primary-light-8': 0.2,
    '--el-color-primary-light-9': 0.1,
    '--el-color-primary-dark-2': 1
  }
  Object.keys(colors).forEach((item: string) => {
    el.style.setProperty(item, `${color.replace(')', '')},${colors[item]})`)
  })
}

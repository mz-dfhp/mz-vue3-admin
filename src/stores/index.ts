import { createPinia } from 'pinia'
import { App } from 'vue'
const store = createPinia()
// type TCacheList = {
//   [key: string]: Array<string>
// }
// const cacheList: TCacheList = {
//   ['user']: ['token']
// }
// const piniaPlugin = ({ store }: PiniaPluginContext) => {
//   const pathList = cacheList[store.$id]
//   if (pathList && pathList.length > 0) {
//     const localStoreVal: any = localStorage.getItem(store.$id)
//     debugger
//     // store.$subscribe(() => {
//     //   localStorage.setItem(store.$id, pathList.reduce(x))
//     // })
//     return {
//       ...store.$state,
//       ...localStoreVal
//     }
//   } else {
//     return store
//   }
// }

// store.use(piniaPlugin)
export function setupStore(app: App<Element>) {
  app.use(store)
}
export default store

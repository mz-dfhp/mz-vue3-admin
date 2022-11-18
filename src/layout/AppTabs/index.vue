<template>
  <div class="tabs-container">
    <el-tabs
      v-model="activeTab"
      type="card"
      class="demo-tabs"
      @tab-remove="removeTab"
      @tab-click="tabClick"
    >
      <el-tab-pane
        :closable="isClosable(item.path)"
        v-for="item in tabsList"
        :key="item.name"
        :label="item.meta.title"
        :name="item.name"
      />
    </el-tabs>
  </div>
</template>
<script lang="ts" setup name="AppTabs">
import { watch, ref, onMounted } from 'vue'
import { useRouter, useRoute, RouteLocationNormalizedLoaded } from 'vue-router'
import { RouteItem, tabsStore } from '@/stores/modules/tabs'
import { PageEnum } from '@/enmus/pageEnums'

const routerInstance = useRouter()
const routeInstance = useRoute()
const tabsStoreInstance = tabsStore()
const activeTab = ref(routeInstance.name)
const tabsList = tabsStoreInstance.getTabList
const isClosable = (path: string) => path !== PageEnum.ROOT_INDEX
onMounted(() => {
  const findRoot = routerInstance
    .getRoutes()
    .find((item) => item.path === PageEnum.ROOT_INDEX)
  findRoot &&
    addTabs({
      ...findRoot,
      matched: [],
      fullPath: '',
      query: {},
      hash: '',
      redirectedFrom: undefined,
      params: {}
    })
  addTabs(routeInstance)
})
watch(
  () => routeInstance.name,
  (name) => {
    activeTab.value = name
    addTabs(routeInstance)
  }
)

const tabClick = (e: { props: { name: string } }) => {
  const { name } = e.props
  const route = tabsList.find((item) => item.name === name)
  routerInstance.push({
    ...route
  })
}
const removeTab = (name: string) => {
  let index = tabsList.findIndex((item) => item.name === name)
  tabsStoreInstance.closeCurrentTabs(name)
  let length = tabsList.length
  let skipIndex = length === index ? index - 1 : index
  name === activeTab.value &&
    routerInstance.replace({
      name: tabsList[skipIndex].name
    })
}
const addTabs = (routeInstance: RouteLocationNormalizedLoaded) => {
  tabsStoreInstance.addTabs(getSimpleRoute(routeInstance))
}
const getSimpleRoute = (routeInstance: any): RouteItem => {
  const { fullPath, hash, meta, name, params, path, query } = routeInstance
  return { fullPath, hash, meta, name, params, path, query }
}
</script>
<style lang="scss" scoped>
.tabs-container {
  :deep(.el-tabs) {
    .el-tabs__header {
      margin: 0;
      border-bottom: none;
      .el-tabs__nav-scroll {
        padding: 0 20px;
        .el-tabs__nav {
          border: none !important;
          .el-tabs__item {
            border: none !important;
          }
        }
      }
    }
  }
}
</style>

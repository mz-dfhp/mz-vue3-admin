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
        :closable="item.path !== '/index'"
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
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { RouteItem, tabsStore } from '@/stores/modules/tabs'
const routerInstance = useRouter()
const routeInstance = useRoute()
const tabsStoreInstance = tabsStore()
const activeTab = ref(routeInstance.name)
const tabsList = tabsStoreInstance.getTabList
onMounted(() => {
  addTabs()
})
watch(
  () => routeInstance.name,
  (name) => {
    activeTab.value = name
    addTabs()
  }
)

const tabClick = (e: { props: { name: string } }) => {
  const { name } = e.props
  routerInstance.push({
    name: name
  })
}
const removeTab = (name: string) => {
  let index = tabsList.findIndex((item) => item.name === name)
  tabsStoreInstance.closeCurrentTabs(name)
  name === activeTab.value &&
    routerInstance.replace({
      name: tabsList[index - 1].name
    })
}
const addTabs = () => {
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

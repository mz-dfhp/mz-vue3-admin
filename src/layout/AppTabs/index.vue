<template>
  <div
    class="flex-between z-1 relative"
    style="box-shadow: 0 6px 12px 0 rgb(49 108 251 / 5%)"
  >
    <div class="flex-1 overflow-hidden">
      <el-tabs
        v-model="activeTab"
        type="card"
        :class="tabName"
        @tab-remove="removeTab"
        @tab-click="tabClick"
      >
        <el-tab-pane
          :closable="isClosable(item.path)"
          v-for="item in tabList"
          :key="item.name"
          :label="item.meta.title"
          :name="item.name"
        />
      </el-tabs>
    </div>
    <el-dropdown @command="handleCommand">
      <div
        class="w-50px i-bi:grid-fill text-16px cursor-pointer flex-shrink-0"
      ></div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in operateList"
            :command="item.id"
            :key="item.id"
            :disabled="operateDisabled(item.id)"
          >
            <div class="flex-between">
              <div :class="item.icon"></div>
              <div class="ml-5px">{{ item.title }}</div>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts" setup name="AppTabs">
import { watch, ref, onMounted, computed } from 'vue'
import { useRouter, useRoute, RouteLocationNormalizedLoaded } from 'vue-router'
import { RouteItem, tabsStore } from '@/store/tabs'
import { PageEnum } from '@/enmus'
import { useSettings, useRefresh } from '@/hooks'

const { refresh } = useRefresh()
const { tabName } = useSettings()
const routerInstance = useRouter()
const routeInstance = useRoute()
const tabsStoreInstance = tabsStore()
const activeTab = ref<any>(routeInstance.name)
const tabList = computed(() => tabsStoreInstance.getTabList)
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

const tabClick: any = (e: { props: { name: string } }) => {
  const { name } = e.props
  const route = tabList.value.find((item) => item.name === name)
  routerInstance.push({
    ...route
  })
}
const removeTab: any = (name: string) => {
  let index = tabList.value.findIndex((item) => item.name === name)
  tabsStoreInstance.closeCurrentTabs(name)
  let length = tabList.value.length
  let skipIndex = length === index ? index - 1 : index
  name === activeTab.value &&
    routerInstance.replace({
      name: tabList.value[skipIndex].name
    })
}
const addTabs = (routeInstance: RouteLocationNormalizedLoaded) => {
  tabsStoreInstance.addTabs(getSimpleRoute(routeInstance))
}
const getSimpleRoute = (routeInstance: any): RouteItem => {
  const { fullPath, hash, meta, name, params, path, query } = routeInstance
  return { fullPath, hash, meta, name, params, path, query }
}

const operateList: Array<{
  title: string
  icon: string
  id: number
}> = [
  {
    id: 1,
    title: '刷新当前',
    icon: 'i-bi-arrow-repeat'
  },
  { id: 2, title: '关闭当前', icon: 'i-bi:x-lg' },
  { id: 3, title: '关闭其他', icon: 'i-bi:x-lg' },
  { id: 4, title: '关闭左侧', icon: 'i-bi:arrow-left-circle' },
  { id: 5, title: '关闭右侧', icon: 'i-bi:arrow-right-circle' },
  { id: 6, title: '关闭全部', icon: 'i-bi:x-lg' }
]
const operateDisabled = (e: number) => {
  let findIndex = tabList.value.findIndex(
    (item) => item.name === routeInstance.name
  )
  switch (e) {
    case 1:
      return false
    case 2:
      return PageEnum.ROOT_INDEX === routeInstance.fullPath
    case 3:
      return tabList.value.length === 2 || tabList.value.length === 1
    case 4:
      return !(findIndex > 1)
    case 5:
      return !(tabList.value.length > findIndex + 1)
    case 6:
      return tabList.value.length <= 1
    default:
      return false
  }
}
const handleCommand = (e: number) => {
  switch (e) {
    case 1:
      refresh()
      break
    case 2:
      removeTab(routeInstance.name as string)
      break
    case 3:
      tabsStoreInstance.closeOtherTabs(routeInstance.name as string)
      break
    case 4:
      tabsStoreInstance.closeLeftTabs(routeInstance.name as string)
      break
    case 5:
      tabsStoreInstance.closeRightTabs(routeInstance.name as string)
      break
    case 6:
      if (PageEnum.ROOT_INDEX !== routeInstance.fullPath)
        routerInstance.push({
          path: PageEnum.ROOT_INDEX
        })
      tabsStoreInstance.closeAllTabs()
      break
    default:
      break
  }
}
</script>
<style lang="scss" scoped>
:deep(.el-tabs) {
  .el-tabs__header {
    margin: 0;
    border-bottom: none;

    .el-tabs__nav-scroll {
      padding: 0 25px;

      .el-tabs__nav {
        border: none !important;
      }
    }
  }
}
// 卡片
:deep(.card) {
  .el-tabs__item {
    min-width: 100px;
    margin-left: -10px;
    text-align: center;
    border: none !important;

    &:hover {
      z-index: 2;
      position: relative;
      background: $tabsHover;
      border-radius: 8px 8px 0 0;

      &::before {
        position: absolute;
        content: '';
        bottom: 0;
        left: -20px;
        width: 20px;
        height: 20px;
        background: radial-gradient(
          circle at 0 0,
          transparent 20px,
          $tabsHover 21px
        );
      }

      &::after {
        position: absolute;
        content: '';
        right: -20px;
        bottom: 0;
        width: 20px;
        height: 20px;
        background: radial-gradient(
          circle at 100% 0,
          transparent 20px,
          $tabsHover 21px
        );
      }
    }
  }

  .el-tabs__item.is-active {
    z-index: 1;
    position: relative;
    background: $mainColor;
    border-radius: 8px 8px 0 0;

    &::before {
      position: absolute;
      content: '';
      bottom: 0;
      left: -20px;
      width: 20px;
      height: 20px;
      background: radial-gradient(
        circle at 0 0,
        transparent 20px,
        $mainColor 21px
      );
    }

    &::after {
      position: absolute;
      content: '';
      right: -20px;
      bottom: 0;
      width: 20px;
      height: 20px;
      background: radial-gradient(
        circle at 100% 0,
        transparent 20px,
        $mainColor 21px
      );
    }
  }
}
// 灵动
:deep(.etherealize) {
  .el-tabs__item {
    position: relative;
    margin-right: 16px;
    text-align: center;
    border: none !important;
    border-radius: 2px;

    &::before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--el-color-primary);
      transition: 0.3s;
    }

    &:hover {
      background: var(--el-color-primary-light-9);

      &::before {
        width: 100%;
      }
    }

    + .el-tabs__item {
      &::after {
        position: absolute;
        content: '';
        top: 50%;
        left: -8px;
        width: 1px;
        height: 60%;
        background: var(--el-color-primary-light-3) !important;
        border-radius: 1px;
        opacity: 1;
        transform: translateY(-50%) scaleX(0.5);
      }
    }
  }

  .el-tabs__item.is-active {
    position: relative;
    background: var(--el-color-primary-light-9);

    &::before {
      width: 100%;
    }
  }
}
</style>

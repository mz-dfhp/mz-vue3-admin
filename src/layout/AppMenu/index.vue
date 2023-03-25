<template>
  <div class="flex h-100% hidden">
    <div
      class="w-80px flex flex-col h-100% menu-left bg-[var(--el-color-primary-light-3)]"
    >
      <AppLogo :expansion="expansion" />
      <div class="flex-1 overflow-y-auto p-10px">
        <div
          class="flex-center flex-col m-b-10px p-y-10px cursor-pointer rounded-4px"
          :class="parentActiveMenu === item.name ? 'bg-main' : ''"
          v-for="(item, index) in getMenus"
          :key="index"
          @click="onParentActiveMenuChange(item)"
        >
          <div class="i-bi:grid text-20px bg-white"></div>
          <div text="center white" m-t-5px>{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div
      class="overflow-y-auto overflow-x-hidden w-200px transition-all"
      :class="props.expansion ? 'w-0!' : ''"
    >
      <div p-x-10px>
        <div class="h-60px flex-center">
          <div class="flex-shrink-0">mz-vue3-admin</div>
        </div>
        <el-menu
          class="common-menu"
          :default-active="(activeMenu as any)"
          :collapse="props.expansion"
          unique-opened
        >
          <AppMenuItem :menuList="menuList" />
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="AppMenu">
import { useRoute, useRouter, RouteRecordName } from 'vue-router'
import AppMenuItem from '../AppMenuItem/index.vue'
import AppLogo from '../AppLogo/index.vue'
import { menuStore } from '@/stores/modules/menu'
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { IPermission } from '@/interface'

const menuStoreInstance = menuStore()
const { getMenus } = storeToRefs(menuStoreInstance)

const route = useRoute()
const router = useRouter()

interface Props {
  expansion: boolean
}
const props = withDefaults(defineProps<Props>(), {
  expansion: true
})
let activeMenu = ref<RouteRecordName | null | undefined>('')

let parentActiveMenu = computed(() => {
  return route.meta.breadcrumb && route.meta.breadcrumb[0].name
})

const menuList = computed(() => {
  const obj = getMenus.value.find(
    (item) => item.name === parentActiveMenu.value
  )
  return obj?.children
})
activeMenu.value = route.meta.activeMenu || route.name

const onParentActiveMenuChange = (item: IPermission) => {
  router.push({
    name: item.children ? item.children[0].name : item.name
  })
}

watch(
  () => route.name,
  () => {
    activeMenu.value = route.meta.activeMenu || route.name
  }
)
</script>
<style lang="scss" scoped>
.common-menu {
  border-right: none;
}

:deep(.el-menu) {
  .el-sub-menu__title {
    margin-bottom: 5px;
    border-radius: 5px;
  }

  .el-menu-item {
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
    border-radius: 5px 0 0 5px;

    &::after {
      position: absolute;
      content: '';
      top: 50%;
      right: 0;
      width: 2px;
      height: 0;
      background: var(--el-color-primary);
      border-radius: 2px;
      opacity: 0;
      transition: all 0.3s;
      transform: translateY(-50%);
    }
  }

  .el-menu-item.is-active {
    position: relative;
    background: var(--el-color-primary-light-7);

    &::after {
      height: 100%;
      opacity: 1;
    }
  }
}
</style>

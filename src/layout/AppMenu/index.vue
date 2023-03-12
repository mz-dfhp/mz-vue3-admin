<template>
  <div>
    <el-menu
      class="common-menu"
      :default-active="activeMenu"
      :collapse="props.expansion"
      unique-opened
      @open="handleOpen"
      @close="handleClose"
    >
      <AppMenuItem :menuList="menuList" />
    </el-menu>
  </div>
</template>

<script lang="ts" setup name="AppMenu">
import { useRoute, RouteRecordName } from 'vue-router'
import AppMenuItem from '../AppMenuItem/index.vue'
import { menuStore } from '@/stores/modules/menu'
import { ref, watch } from 'vue'
const menuStoreInstance = menuStore()
const route = useRoute()
interface Props {
  expansion: boolean
}
const props = withDefaults(defineProps<Props>(), {
  expansion: true
})
let activeMenu = ref<RouteRecordName | null | undefined>('')
activeMenu.value = route.meta.activeMenu || route.name
watch(
  () => route.name,
  () => {
    activeMenu.value = route.meta.activeMenu || route.name
  }
)
const menuList = menuStoreInstance.getMenus
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>
.common-menu {
  border-right: none;
}

.common-menu:not(.el-menu--collapse) {
  width: 200px;
}

:deep(.el-menu-item) {
  position: relative;

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

:deep(.el-menu-item.is-active) {
  position: relative;
  background: var(--el-color-primary-light-7);

  &::after {
    height: 100%;
    opacity: 1;
  }
}
</style>

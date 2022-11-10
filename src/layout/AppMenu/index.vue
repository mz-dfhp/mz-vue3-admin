<template>
  <el-menu
    class="common-menu"
    default-active="2"
    background-color="#001428"
    active-text-color="#ffd04b"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <AppMenuItem :menuList="menuList" />
  </el-menu>
</template>

<script lang="ts" setup name="AppMenu">
import AppMenuItem from '../AppMenuItem/index.vue'
import { menuStore } from '@/stores/modules/menu'
const menuStoreInstance = menuStore()
const menuList = menuStoreInstance.getMenus
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>
.common-menu {
  border-right: none;
}
</style>

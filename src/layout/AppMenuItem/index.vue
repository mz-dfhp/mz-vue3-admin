<template>
  <template v-for="item in props.menuList">
    <template v-if="item.children">
      <el-sub-menu :index="item.name" :key="item.name">
        <template #title>
          <div
            :class="icon ? 'i-zondicons-view-tile' : ''"
            class="menu-icon-box flex items-center justify-center p-x-5px"
          ></div>
          <span>{{ item.title }}</span>
        </template>
        <AppMenuItem :menuList="item.children" />
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="item.name" :key="item.name" @click="menuItemClick">
        <span>{{ item.title }}</span>
      </el-menu-item>
    </template>
  </template>
</template>
<script lang="ts" setup name="AppMenuItem">
import { IPermissionList } from '@/interface'
import { useRouter } from 'vue-router'
const router = useRouter()
interface IProps {
  menuList: Array<IPermissionList>
  icon?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  menuList: () => []
})
const menuItemClick = (e: any) => {
  router.push({
    name: e.index
  })
}
</script>

<style scoped lang="scss"></style>

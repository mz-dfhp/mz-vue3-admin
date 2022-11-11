<template>
  <template v-for="item in props.menuList">
    <template v-if="item.children">
      <el-sub-menu :index="item.name" :key="item.name">
        <template #title>
          <span>{{ item.name }}</span>
        </template>
        <AppMenuItem :menuList="item.children" />
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="item.name" :key="item.name" @click="menuItemClick">
        <span>{{ item.name }}</span>
      </el-menu-item>
    </template>
  </template>
</template>
<script lang="ts" setup name="AppMenuItem">
import { RouteRecordRaw } from 'vue-router'
import { useRouter } from 'vue-router'
const router = useRouter()
interface IProps {
  menuList: Array<RouteRecordRaw>
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

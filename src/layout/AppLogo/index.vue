<template>
  <div class="h60px flex items-center justify-center">
    <img
      width="36"
      height="36"
      class="animate-bounce cursor-pointer"
      :src="Logo"
    />
    <div class="ml10px" v-if="!props.expansion">木子</div>
  </div>
</template>

<script setup lang="ts" name="AppLogo">
import Logo from '@/assets/svg/vue.svg'
interface Props {
  expansion: boolean
}
const props = withDefaults(defineProps<Props>(), {
  expansion: true
})
</script>
<style scoped lang="scss"></style>

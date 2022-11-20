<template>
  <div class="h60px flex items-center justify-center">
    <img
      width="36"
      height="36"
      class="rounded-full cursor-pointer"
      src="../../assets/images/logo.jpg"
    />
    <div class="ml10px" v-if="!props.expansion">admin</div>
  </div>
</template>

<script setup lang="ts" name="AppLogo">
interface Props {
  expansion: boolean
}
const props = withDefaults(defineProps<Props>(), {
  expansion: true
})
</script>
<style scoped lang="scss"></style>

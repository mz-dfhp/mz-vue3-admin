<script setup lang="ts" name="AppLogo">
interface Props {
  expansion: boolean
}
const props = withDefaults(defineProps<Props>(), {
  expansion: true
})
</script>

<template>
  <div class="logo-box">
    <img
      width="36"
      height="36"
      class="logo-img"
      src="../../assets/images/logo.jpg"
    />
    <div class="logo-title" v-if="!props.expansion">admin</div>
  </div>
</template>

<style scoped lang="scss">
.logo-box {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo-img {
    border-radius: 50%;
    cursor: pointer;
  }
  .logo-title {
    margin-left: 10px;
  }
}
</style>

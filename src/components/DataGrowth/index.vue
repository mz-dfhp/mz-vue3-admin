<template>
  {{ target }}
</template>

<script setup lang="ts" name="DataGrowth">
import { gsap, Linear } from 'gsap'
import { ref, watch } from 'vue'

interface IProps {
  targetVal: number
  precision?: number
  unit?: string
}
const props = withDefaults(defineProps<IProps>(), {
  targetVal: 0,
  precision: 0,
  unit: ''
})
const target = ref<string | number>(0)

const animate = () => {
  gsap.to(target, {
    duration: 2,
    ease: Linear.easeNone,
    value: props.targetVal,
    onUpdate: () => {
      target.value = Number(target.value).toFixed(props.precision) + props.unit
    }
  })
}

watch(
  () => props.targetVal,
  () => {
    animate()
  },
  {
    immediate: true
  }
)
</script>

<style scoped lang="scss"></style>

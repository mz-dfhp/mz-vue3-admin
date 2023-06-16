<template>
  <div>
    <el-row :gutter="12">
      <el-col :lg="6" :md="12" :xs="24">
        <el-card shadow="hover">
          <div flex-center flex-col>
            <div>访问量</div>
            <div text-10 m-t-2 font-bold>
              <DataGrowth :targetVal="999" />
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="6" :md="12" :xs="24">
        <el-card shadow="hover">
          <div flex-center flex-col>
            <div>点赞量</div>
            <div text-10 m-t-2 font-bold>
              <DataGrowth :targetVal="888" />
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="6" :md="12" :xs="24">
        <el-card shadow="hover">
          <div flex-center flex-col bord>
            <div>下载量</div>
            <div text-10 m-t-2 font-bold>
              <DataGrowth :targetVal="50" unit="%" />
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="6" :md="12" :xs="24">
        <el-card shadow="hover">
          <div flex-center flex-col>
            <div>成交量</div>
            <div text-10 m-t-2 font-bold>
              <DataGrowth :targetVal="666" />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :lg="12" :md="12" :xs="24">
        <el-card shadow="hover">
          <div class="h-120" ref="echartOneRefs"></div>
        </el-card>
      </el-col>
      <el-col :lg="12" :md="12" :xs="24">
        <el-card shadow="hover">
          <div class="h-120" ref="echartTwoRefs"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="Index">
import { showOne, showTwo } from './options'
import { onMounted, reactive, ref, onUnmounted, watch, Ref } from 'vue'
import { throttle } from 'lodash-es'
import { EChartsType } from 'echarts/core'
import { settingStore } from '@/store/setting'
type TEchars = {
  [propName: string]: EChartsType | null
}
const echartOneRefs = ref<Ref | null>(null)
const echartTwoRefs = ref<Ref | null>(null)

const echars = reactive<TEchars>({
  echartOne: null,
  echartTwo: null
})

watch(
  () => settingStore().getExpansion,
  () => {
    setTimeout(handleEchars, 300)
  }
)
onMounted(() => {
  echars.echartOne = showOne(echartOneRefs.value as HTMLElement)
  echars.echartTwo = showTwo(echartTwoRefs.value as HTMLElement)
  window.addEventListener('resize', handleEchars)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleEchars)
})
const handleEchars = throttle(() => {
  Object.keys(echars).forEach((item) => {
    echars[item]?.resize()
  })
}, 500)
</script>
<style lang="scss" scoped>
[class*='el-col-'] {
  padding-top: 6px;
  padding-bottom: 6px !important;
}

:deep(.el-card) {
  border: none;
}
</style>

<template>
  <div>
    <el-card shadow="hover">
      <template #header>
        <el-button type="primary">基本</el-button>
      </template>
      <div text-10 m-t-2 font-bold>
        <DataGrowth :targetVal="10000" />
      </div>
    </el-card>
    <br />
    <el-card shadow="hover">
      <template #header>
        <el-button type="primary">精度</el-button>
      </template>
      <div text-10 m-t-2 font-bold>
        <DataGrowth :targetVal="2173" :precision="2" />
      </div>
    </el-card>
    <el-card shadow="hover">
      <template #header>
        <el-button type="primary">单位</el-button>
      </template>
      <div text-10 m-t-2 font-bold>
        <DataGrowth :targetVal="90" unit="%" />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="Growth"></script>
<style lang="scss" scoped>
[class*='el-col-'] {
  padding-top: 6px;
  padding-bottom: 6px !important;
}

:deep(.el-card) {
  border: none;
}
</style>

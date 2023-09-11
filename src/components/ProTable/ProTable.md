### element-plus table 怎么用的就怎么用
```
<template>
  <ProTable :data="tableData" :columns="columns">
    <template #expand="{ row }">
      <el-button type="primary">{{ row }}</el-button>
    </template>
    <template #status="{ row }">
      <el-button type="primary">{{ row.status }}</el-button>
    </template>
    <template #operation="{ row }">
      <el-button type="primary">{{ row.id }}编辑</el-button>
    </template>
  </ProTable>
</template>

<script setup lang="tsx" name="ProTable">
import ProTable, { type ColumnProps } from '@/components/ProTable/index.vue'

const tableData = Array(10)
  .fill(null)
  .map((item, index) => ({
    id: index,
    item,
    value: `测试${index}值`,
    status: `状态${index}`
  }))

const columns: ColumnProps[] = [
  {
    label: '多选 | 单选',
    type: 'selection',
    width: 200
  },
  {
    label: '展开',
    type: 'expand',
    width: 200
  },
  {
    label: '测试1',
    prop: 'value',
    width: 200,
    render: () => <div>我是jsx</div>
  },
  {
    label: '测试1',
    width: 200,
    prop: 'value',
    headerRender: () => <div>我是自定义表头</div>
  },
  {
    label: '测试1',
    minWidth: 200,
    prop: 'status'
  },
  { prop: 'operation', label: '操作', fixed: 'right', width: 250 }
]
</script>

<style scoped lang="scss"></style>

```
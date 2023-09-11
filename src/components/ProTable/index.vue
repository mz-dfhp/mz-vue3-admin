<template>
  <el-table
    v-bind="$attrs"
    ref="tableRef"
    :data="props.data"
    :row-key="props.rowKey"
    :border="props.border"
    element-loading-text="加载中"
    element-loading-background="rgba(122, 122, 122, 0.8)"
    @selection-change="selectionChange"
    v-watermark
  >
    <template v-for="item in columns" :key="item">
      <!-- 多选 单选 展开-->
      <template v-if="item.type">
        <el-table-column
          v-bind="item"
          :reserve-selection="item.type == 'selection'"
          v-if="item.type == 'selection' || item.type == 'index'"
          align="center"
        >
        </el-table-column>
        <el-table-column
          v-bind="item"
          v-if="item.type == 'expand'"
          #default="{ row, $index }"
        >
          <component
            :is="item.render"
            :row="row"
            v-if="item.render"
            :$index="$index"
          />
          <slot :name="item.type" :row="row" v-else></slot>
        </el-table-column>
      </template>
      <template v-else>
        <TableColumn :column="item">
          <template v-for="slot in Object.keys($slots)" #[slot]="scope">
            <slot :name="slot" v-bind="scope"></slot>
          </template>
        </TableColumn>
      </template>
    </template>
    <template #empty>
      <div class="table-empty">
        <slot name="empty">
          <el-empty description="暂无数据" />
        </slot>
      </div>
    </template>
    <template #append>
      <div class="table-append">
        <slot name="append"> </slot>
      </div>
    </template>
  </el-table>
</template>

<script setup lang="ts" name="ProTable">
import { useSelection } from '@/hooks'
import TableColumn from './components/TableColumn.vue'
import { ColumnProps } from '@/components/ProTable/index.vue'

interface Iprops {
  data: any[]
  columns: ColumnProps[]
  border?: boolean
  rowKey?: string
}

const props = withDefaults(defineProps<Iprops>(), {
  // 表格数据
  data: () => [],
  // 列表配置
  columns: () => [],
  // 表格边框
  border: true,
  // 行数据的 Key
  rowKey: 'id'
})

const {
  selectionChange,
  selectedList,
  selectedListIds,
  isSelected,
  tableRef,
  toggleRowSelection,
  clearSelection
} = useSelection(props.rowKey)

defineExpose({
  tableRef,
  isSelected,
  selectedList,
  selectedListIds,
  selectionChange,
  toggleRowSelection,
  clearSelection
})
</script>

<style scoped lang="scss"></style>

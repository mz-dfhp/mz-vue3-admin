<template>
  <component :is="renderLoop(column)"></component>
</template>

<script lang="tsx" setup name="TableColumn">
import { useSlots } from 'vue'
import { ColumnProps } from '@/components/ProTable/index.vue'

defineProps<{ column: ColumnProps }>()
const slots = useSlots()

/**
 * @description 处理 prop 为多级嵌套的情况(列如: prop:user.name)
 * @param {Object} row 当前行数据
 * @param {String} prop 当前 prop
 * @return any
 * */
function handleRowAccordingToProp(row: { [key: string]: any }, prop: string) {
  if (!prop.includes('.'))
    return typeof row[prop] === 'number' ? row[prop] : row[prop] || '-'
  prop
    .split('.')
    .forEach(
      (item) =>
        (row = typeof row[item] === 'number' ? row[item] : row[item] || '-')
    )
  return row
}

const renderCellData = (
  item: ColumnProps,
  scope: { row: Record<string, any> }
) => {
  return item.prop ? handleRowAccordingToProp(scope.row, item.prop) : '-'
}

const renderLoop = (item: ColumnProps) => {
  return (
    <>
      <el-table-column align="center" showOverflowTooltip {...item}>
        {{
          default: (scope: any) => {
            if (item._children)
              return item._children.map((child) => renderLoop(child))
            if (item.render) return item.render(scope)
            if (item.prop && slots[item.prop])
              return item.prop && slots[item.prop]?.(scope)
            return renderCellData(item, scope)
          },
          header: () => {
            if (item.headerRender) return item.headerRender(item)
            if (slots[`${item.prop}Header`])
              return slots[`${item.prop}Header`]?.({ row: item })
            return item.label
          }
        }}
      </el-table-column>
    </>
  )
}
</script>

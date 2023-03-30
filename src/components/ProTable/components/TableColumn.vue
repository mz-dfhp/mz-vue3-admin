<template>
  <component :is="renderLoop(column)"></component>
</template>

<script lang="tsx" setup name="TableColumn">
import { useSlots } from 'vue'
import { ColumnProps } from '@/types'
import { handleRowAccordingToProp } from '@/utils'

defineProps<{ column: ColumnProps }>()
const slots = useSlots()

const renderCellData = (
  item: ColumnProps,
  scope: { row: { [x: string]: any } }
) => {
  return item.prop ? handleRowAccordingToProp(scope.row, item.prop) : '-'
}

const renderLoop = (item: ColumnProps) => {
  return (
    <>
      <el-table-column {...item} align="center" showOverflowTooltip>
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

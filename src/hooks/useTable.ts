/*
 * @Author: mz 486836332@qq.com
 * @Date: 2023-03-26 15:21:15
 * @LastEditors: mz 486836332@qq.com
 * @LastEditTime: 2023-03-26 15:21:37
 * @Description:表格相关
 */

import { ElTable } from 'element-plus'
import { throttle } from 'lodash-es'
import { computed, onMounted, onUnmounted, Ref, ref } from 'vue'

/**
 * @description:获取表格父元素高度
 * @return {*}
 */
export function useTableWrapperHeight(): {
  tableWrapperHeight: Ref<number>
  tableWrapperRef: Ref<HTMLElement | null>
} {
  const tableWrapperHeight = ref(0)
  const tableWrapperRef = ref<HTMLElement | null>(null)
  const onGetParentHeight = () => {
    const element = tableWrapperRef.value?.parentElement
    const paddingTop = element
      ? window.getComputedStyle(element, null).getPropertyValue('padding-top')
      : '0px'
    const paddingBottom = element
      ? window
          .getComputedStyle(element, null)
          .getPropertyValue('padding-bottom')
      : '0px'
    tableWrapperHeight.value = element
      ? element.clientHeight -
        Number(paddingTop.replace('px', '')) -
        Number(paddingBottom.replace('px', ''))
      : 0
  }
  const handleHeight = throttle(onGetParentHeight, 500)
  onMounted(() => {
    onGetParentHeight()
    window.addEventListener('resize', handleHeight)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleHeight)
  })
  return {
    tableWrapperHeight,
    tableWrapperRef
  }
}

/**
 * @description:
 * @param {*} rowKey 表格 rowKey
 * @return {*}
 */
export function useSelection(rowKey = 'id') {
  // 表格ref
  const tableRef = ref<InstanceType<typeof ElTable>>()
  // 是否选择了
  const isSelected = ref<boolean>(false)
  // 选择的列表
  const selectedList = ref<any[]>([])
  // 选择的 rowKey
  const selectedListIds = computed((): string[] => {
    const ids: string[] = []
    selectedList.value.forEach((item) => ids.push(item[rowKey]))
    return ids
  })
  // 表格选择
  const selectionChange = (rowArr: any) => {
    rowArr.length === 0 ? (isSelected.value = false) : (isSelected.value = true)
    selectedList.value = rowArr
  }
  // 清除
  const clearSelection = () => {
    tableRef.value?.clearSelection()
  }
  // 自由选中
  const toggleRowSelection = (list: any[]) => {
    tableRef.value?.clearSelection()
    list.slice(0).forEach((item) => {
      tableRef.value?.toggleRowSelection(item, true)
    })
  }
  return {
    tableRef,
    isSelected,
    selectedList,
    selectedListIds,
    selectionChange,
    toggleRowSelection,
    clearSelection
  }
}

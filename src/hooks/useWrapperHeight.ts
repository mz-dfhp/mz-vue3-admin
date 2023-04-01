/*
 * @Author: mz 486836332@qq.com
 * @Date: 2023-04-01 13:42:12
 * @LastEditors: mz 486836332@qq.com
 * @LastEditTime: 2023-04-01 13:47:20
 * @Description:获取父元素高度
 */

import { throttle } from 'lodash-es'
import { onMounted, onUnmounted, Ref, ref } from 'vue'

/**
 * @description:获取父元素高度 不包括padding
 * @return {*} 父元素高度
 */
export function useWrapperHeight(): {
  wrapperHeight: Ref<number>
  targetRef: Ref<HTMLElement | null>
} {
  const wrapperHeight = ref(0)
  const targetRef = ref<HTMLElement | null>(null)
  const onGetParentHeight = () => {
    const element = targetRef.value?.parentElement
    const paddingTop = element
      ? window.getComputedStyle(element, null).getPropertyValue('padding-top')
      : '0px'
    const paddingBottom = element
      ? window
          .getComputedStyle(element, null)
          .getPropertyValue('padding-bottom')
      : '0px'
    wrapperHeight.value = element
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
    wrapperHeight,
    targetRef
  }
}

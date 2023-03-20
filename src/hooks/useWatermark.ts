import { onMounted, onUnmounted, Ref } from 'vue'
import { throttle } from 'lodash-es'
interface WatermarkOptions {
  text: string
  targetRef: Ref<HTMLElement | null>
}

export function useWatermark({ text, targetRef }: WatermarkOptions) {
  const uuid = `water${Math.random().toString().slice(5)}mark`
  const createWatermark = (): string => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    const x = canvas.width / 2
    const y = canvas.height / 2
    const angle = -20
    const color =
      document.documentElement.style.getPropertyValue('--el-color-primary')
    ctx.fillStyle = color
    ctx.font = 'normal 18px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.translate(x, y)
    ctx.rotate((angle * Math.PI) / 180)
    ctx.fillText(text, 0, 0)
    return canvas.toDataURL()
  }
  const renderWatermark = () => {
    removeWatermark()
    createNode()
  }
  const createNode = () => {
    const rect = targetRef.value && targetRef.value.getBoundingClientRect()
    const div = document.createElement('div')
    div.className = uuid
    div.style.position = 'absolute'
    div.style.zIndex = '9'
    div.style.left = '0px'
    div.style.top = '0px'
    div.style.width = `${rect?.width}px`
    div.style.height = `${rect?.height}px`
    div.style.pointerEvents = 'none'
    div.style.background = `url('${createWatermark()}') left top repeat`
    targetRef.value?.appendChild(div)
    targetRef.value && (targetRef.value.style.position = 'relative')
  }
  const removeWatermark = () => {
    const node = document.querySelector(`.${uuid}`)
    node && targetRef.value?.removeChild(node)
  }
  const handerWatermark = () => {
    const node = document.querySelector(`.${uuid}`)
    node && renderWatermark()
  }
  onMounted(() => {
    window.addEventListener('resize', throttle(handerWatermark, 500))
  })

  onUnmounted(() => {
    window.removeEventListener('resize', throttle(handerWatermark, 500))
  })
  return {
    renderWatermark,
    removeWatermark
  }
}
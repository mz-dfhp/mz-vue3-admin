<template>
  <div class="nut-signature-inner" ref="wrap">
    <canvas
      ref="canvas"
      :height="canvasState.canvasHeight"
      :width="canvasState.canvasWidth"
    />
  </div>
</template>
<script setup lang="ts" name="signature">
import { ref, reactive, onMounted } from 'vue'
interface Iprops {
  lineWidth?: number
  strokeStyle?: string
  unSupportTpl?: string
  type?: string
}

const props = withDefaults(defineProps<Iprops>(), {
  lineWidth: 2,
  strokeStyle: () => {
    let bodyDom: any = document.getElementsByTagName('body')
    let clsName = bodyDom[0]['className']
    if (clsName.indexOf('nut-theme-dark') == -1) {
      return '#000'
    } else {
      return '#fff'
    }
  },
  unSupportTpl: '',
  type: 'png'
})

const emits = defineEmits<{
  (e: 'start'): void
  (e: 'end'): void
  (e: 'clear'): void
  (e: 'signing', value: any): void
  (e: 'confirm', value: any, data: any): void
}>()

const canvas: any = ref<HTMLElement | null>(null)
const wrap: any = ref<HTMLElement | null>(null)

const canvasState = reactive({
  canvasHeight: 0,
  canvasWidth: 0,
  ctx: null as any,
  isSupportTouch: 'ontouchstart' in window,
  events:
    'ontouchstart' in window
      ? ['touchstart', 'touchmove', 'touchend', 'touchleave']
      : ['mousedown', 'mousemove', 'mouseup', 'mouseleave']
})
const isCanvasSupported = () => {
  let elem = document.createElement('canvas')
  return !!(elem.getContext && elem.getContext('2d'))
}
const addEvent = () => {
  canvas.value.addEventListener(canvasState.events[0], startEventHandler, false)
}

const startEventHandler = (event: MouseEvent) => {
  event.preventDefault()
  canvasState.ctx.beginPath()
  canvasState.ctx.lineWidth = props.lineWidth
  canvasState.ctx.strokeStyle = props.strokeStyle
  emits('start')
  canvas.value.addEventListener(canvasState.events[1], moveEventHandler, false)
  canvas.value.addEventListener(canvasState.events[2], endEventHandler, false)
  canvas.value.addEventListener(canvasState.events[3], leaveEventHandler, false)
}

const moveEventHandler = (event: {
  preventDefault: () => void
  touches: any[]
}) => {
  event.preventDefault()

  let evt = canvasState.isSupportTouch ? event.touches[0] : event
  emits('signing', evt)
  let coverPos = canvas.value.getBoundingClientRect()
  let mouseX = evt.clientX - coverPos.left
  let mouseY = evt.clientY - coverPos.top

  canvasState.ctx.lineTo(mouseX, mouseY)
  canvasState.ctx.stroke()
}

const endEventHandler = (event: { preventDefault: () => void }) => {
  event.preventDefault()
  emits('end')
  canvas.value.removeEventListener(
    canvasState.events[1],
    moveEventHandler,
    false
  )
  canvas.value.removeEventListener(
    canvasState.events[2],
    endEventHandler,
    false
  )
}
const leaveEventHandler = (event: { preventDefault: () => void }) => {
  event.preventDefault()
  canvas.value.removeEventListener(
    canvasState.events[1],
    moveEventHandler,
    false
  )
  canvas.value.removeEventListener(
    canvasState.events[2],
    endEventHandler,
    false
  )
}
const clear = () => {
  canvas.value.addEventListener(canvasState.events[2], endEventHandler, false)
  canvasState.ctx.clearRect(
    0,
    0,
    canvasState.canvasWidth,
    canvasState.canvasHeight
  )
  canvasState.ctx.closePath()
  emits('clear')
}

const confirm = () => {
  onSave(canvas.value)
}
const isCanvasBlank = (canvas: any) => {
  if (!canvas) {
    return true
  }
  var blank: any = document.createElement('canvas')
  blank.width = canvas.width
  blank.height = canvas.height
  return canvas?.toDataURL() == blank.toDataURL()
}
const onSave = (canvas: {
  toDataURL: (arg0: string, arg1?: number | undefined) => any
}) => {
  let dataurl
  switch (props.type) {
    case 'png':
      dataurl = canvas.toDataURL('image/png')
      break
    case 'jpg':
      dataurl = canvas.toDataURL('image/jpeg', 0.8)
      break
  }
  const _canvas = isCanvasBlank(canvas) ? '请绘制签名' : canvas
  const _filePath = isCanvasBlank(canvas) ? '' : dataurl
  emits('confirm', _canvas, _filePath)
}

onMounted(() => {
  if (isCanvasSupported()) {
    canvasState.ctx = canvas.value.getContext('2d')
    canvasState.canvasWidth = wrap.value.offsetWidth
    canvasState.canvasHeight = wrap.value.offsetHeight
    addEvent()
  }
})
defineExpose({
  clear,
  confirm
})
</script>

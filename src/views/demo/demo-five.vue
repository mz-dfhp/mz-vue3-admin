<script setup lang="ts" name="Demo-five">
import Draggable from 'vuedraggable'
import { ref } from 'vue'
function rgb() {
  //rgb颜色随机
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}
let arr = [
  'i-zondicons-add-outline',
  'i-zondicons-add-solid',
  'i-zondicons-adjust',
  'i-zondicons-airplane',
  'i-zondicons-album',
  'i-zondicons-align-center',
  'i-zondicons-align-justified',
  'i-zondicons-align-left',
  'i-zondicons-align-right',
  'i-zondicons-anchor',
  'i-zondicons-announcement',
  'i-zondicons-apparel',
  'i-zondicons-arrow-down',
  'i-zondicons-arrow-left',
  'i-zondicons-arrow-outline-down',
  'i-zondicons-arrow-outline-left',
  'i-zondicons-arrow-outline-right',
  'i-zondicons-arrow-outline-up',
  'i-zondicons-arrow-right',
  'i-zondicons-arrow-thick-down',
  'i-zondicons-arrow-thick-left',
  'i-zondicons-arrow-thick-right',
  'i-zondicons-arrow-thick-up',
  'i-zondicons-arrow-thin-down',
  'i-zondicons-arrow-thin-left',
  'i-zondicons-arrow-thin-right',
  'i-zondicons-arrow-thin-up',
  'i-zondicons-arrow-up',
  'i-zondicons-artist',
  'i-zondicons-at-symbol',
  'i-zondicons-attachment',
  'i-zondicons-backspace',
  'i-zondicons-backward',
  'i-zondicons-backward-step',
  'i-zondicons-badge',
  'i-zondicons-battery-full',
  'i-zondicons-battery-half',
  'i-zondicons-battery-low',
  'i-zondicons-beverage',
  'i-zondicons-block',
  'i-zondicons-bluetooth',
  'i-zondicons-bolt',
  'i-zondicons-book-reference',
  'i-zondicons-bookmark',
  'i-zondicons-bookmark-copy-2',
  'i-zondicons-bookmark-copy-3',
  'i-zondicons-bookmark-outline',
  'i-zondicons-bookmark-outline-add'
].map((item) => ({ name: item, color: rgb() }))
const cardList = ref<Array<{ name: string; color: string }>>(arr)
const drag = ref<boolean>(false)
</script>

<template>
  <div>
    <el-card shadow="hover" class="">
      <div flex-between>
        <el-button type="primary">unocss icon</el-button>
        <a href="https://github.com/SortableJS/vue.draggable.next/issues/159"
          >issues</a
        >
      </div>
    </el-card>
    <br />
    <Draggable
      class="flex flex-wrap"
      v-model="cardList"
      :component-data="{
        tag: 'ul',
        type: 'transition-group',
        name: !drag ? 'flip-list' : null
      }"
      :dragOptions="{
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }"
      item-key="name"
      @start="drag = true"
      @end="drag = false"
    >
      <template #item="{ element }">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" class="cursor-move">
          <el-card shadow="hover">
            <div class="flex-center flex-col">
              <div
                :class="element.name"
                text-24px
                :style="{ color: element.color }"
              ></div>
              <el-button
                size="small"
                :color="element.color"
                class="text-12px m-t-4px"
              >
                拖拽我</el-button
              >
            </div>
          </el-card>
        </el-col>
      </template>
    </Draggable>
  </div>
</template>
<style scoped lang="scss">
:deep(.el-col) {
  padding: 5px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  background: #c8ebfb;
  opacity: 0.5;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>

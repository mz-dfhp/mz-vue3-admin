<template>
  <div ref="container" class="w-50% h-50vh m-auto!"></div>
</template>

<script setup lang="ts" name="Hello-threejs">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

// 创建容器
const container = ref<HTMLElement | null>(null)

const createThree = () => {
  // 创建场景
  const scene = new THREE.Scene()
  // 创建相机
  // PerspectiveCamera 透视摄像机
  // param 视野角度
  // param 长宽比
  // param 近截面（near）和远截面（far）
  const camera = new THREE.PerspectiveCamera(
    75,
    (container.value?.clientWidth || 0) / (container.value?.clientHeight || 0),
    0.1,
    1000
  )
  // 创建渲染器
  const renderer = new THREE.WebGLRenderer()
  // 渲染器的尺寸
  renderer.setSize(
    container.value?.clientWidth || 0,
    container.value?.clientHeight || 0
  )
  // 添加到dom中
  container.value?.appendChild(renderer.domElement)
  // 创建一个立方体
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  // 添加材质
  const material = new THREE.MeshBasicMaterial({ color: 0x34085f })
  // 创建网格
  const cube = new THREE.Mesh(geometry, material)
  // 网格对象放入到我们的场景中
  scene.add(cube)
  // 将摄像机稍微向外移动
  camera.position.z = 5
  function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  animate()
}
onMounted(() => {
  createThree()
})
</script>

<style scoped lang="scss"></style>

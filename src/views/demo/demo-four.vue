<script setup lang="ts" name="Demo-four"></script>

<template>
  <div>
    <el-card shadow="hover">
      <el-button type="danger">demo</el-button>
    </el-card>
    <br />
    <el-card shadow="hover">
      <template #header>
        <div class="card-header">
          <el-button type="primary">demo</el-button>
        </div>
      </template>
      <div class="h-40vh"></div>
    </el-card>
    <br />
  </div>
</template>
<style scoped></style>

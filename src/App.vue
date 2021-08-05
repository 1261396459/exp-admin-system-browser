<template>
  <el-container>
    <el-header>
      <el-icon class="el-header-s">
        <el-icon-back />
        <span>{{ $route.name }}</span>
        <el-icon-check />
      </el-icon>
    </el-header>
    <el-container>
      <router-view class="page"/>
    </el-container>
  </el-container>
</template>

<style scoped >
  .el-header-s {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

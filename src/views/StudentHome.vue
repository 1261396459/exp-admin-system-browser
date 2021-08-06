<template>
  <el-container class="page">
    <el-header>
      <el-icon-back class="el-icon"/>
      <p>{{ $route.name }}</p>
      <el-icon-check class="el-icon"/>
    </el-header>
    <div class="header"></div>
    <el-main>
     <router-view class="page"/>
    </el-main>
    <div class="footer"></div>
    <el-footer>
      <el-icon-calendar class="el-icon"/>
      <el-icon-checked class="el-icon"/>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    
  }
}
</script>

<style scoped lang="less">

</style>

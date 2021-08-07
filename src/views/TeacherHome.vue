<template>
  <el-container class="page">
    <el-header class="head">
      <div class="el-icon"/>
      <p>{{ $route.name }}</p>
      <div class="el-icon"/>
    </el-header>
    <div class="header"></div>
    <el-main class="main">
      <router-view class="page"></router-view>
    </el-main>
    <div class="footer"></div>
    <el-footer>
      <div class="footer-text">
        <router-link to="big" append replace>
          <el-icon-calendar class="el-icon"/>
        </router-link>   
        <span>实验课程</span>
      </div>
      <div class="footer-text">
        <router-link to="apply" append replace>
          <el-icon-checked class="el-icon"/>        
        </router-link> 
        <span>我的申请</span>
      </div>
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

<style scoped lang="less"></style>

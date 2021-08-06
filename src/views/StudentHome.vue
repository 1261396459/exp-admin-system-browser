<template>
  <el-container class="page">
    <el-header>
      <div class="el-icon"/>
      <p>{{ $route.name }}</p>
      <div class="el-icon"/>
    </el-header>
    <div class="header"></div>
    <el-main>
     <router-view class="page"/>
    </el-main>
    <div class="footer"></div>
    <el-footer>
      <div class="footer-text">
        <router-link to="course" append replace>
          <el-icon-calendar class="el-icon"/>
        </router-link>   
        <span>实验课程</span>
      </div>
      <div class="footer-text">
        <router-link to="sign" append replace>
          <el-icon-checked class="el-icon"/>        
        </router-link> 
        <span>我的签到</span>
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

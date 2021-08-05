<template>
  <el-container class="page">
    <el-header class="head">
      <el-icon-back class="el-icon"/>
      <p>{{ $route.name }}</p>
      <el-icon-check class="el-icon"/>
    </el-header>
    <el-main class="main">
      <img class="logo" src="../assets/logo.png"/>
      <div class="fit-text-margin input">
        <el-input placeholder="帐号" v-model="acc" clearable></el-input>
      </div>
      <div class="fit-text-margin input">
        <el-input placeholder="密码" v-model="pass" clearable show-password></el-input>
      </div>
      <div class="sure" @click="_login">
        <el-button type="primary" :disabled="acc==''||pass==''">登录</el-button>
      </div>      
    </el-main>
  </el-container>
</template>

<script>
import User from '@/api/user.js'
export default {
  data() {
    return {
      acc: '',
      pass: ''
    }
  },
  methods: {
    async _login(){
      const res = await User.login(this.acc, this.pass)
      const rm = res.data
      console.log(rm)
      if(rm.length == 0){
        this.$message.warning('账号或密码错误')
        return ;
      }
      this.$message.success('登录成功') 
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped lang="less">
.main {
  .flexColHorCenter();
}
.logo {
  height: 234px;
}
.input {
  width: 80%;
}
.sure {
  width: 80%;
  margin-top: @TopBtmGapping;
}
.el-button {
  width: 100%;
}
</style>

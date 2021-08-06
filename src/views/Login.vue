<template>
  <el-container class="page">
    <el-header class="header">
      <el-icon-back class="el-icon"/>
      <p>{{ $route.name }}</p>
      <el-icon-check class="el-icon"/>
    </el-header>
    <div class="header"></div>
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
      console.log(res)
      if(res.status == 200){
        const rm = res.data[0]
        this.$store.commit("LOGIN", {
          uid: rm.BELONG,
          acc: this.acc,
          level: rm.POWER
        })
        this.$message.success('登录成功')
        this.toEnter(rm.POWER)
        return ;
      }
      this.$message.warning('账号或密码错误')
    },
    toEnter(level) {
      switch(level) {
        case '2':
          this.$router.replace('/')
          break
        case '3':
          this.$router.replace('/')
          break
        case '9':
          this.$router.replace('/student')
          break
        default:
          console.warn('无该权限信息')
          break
      }
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped lang="less">
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

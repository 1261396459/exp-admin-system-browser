<template>
  <el-container>
    <el-main class="main">
      <img src="../assets/logo.png"/>
      <el-input placeholder="帐号" v-model="acc" clearable></el-input>
      <el-input placeholder="帐号" v-model="pass" clearable show-password></el-input>
      <el-button :disabled="acc==''||pass==''">登录</el-button>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      acc: '',
      pass: '',
      cantLogin: true
    }
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>

<style scoped lang="less">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

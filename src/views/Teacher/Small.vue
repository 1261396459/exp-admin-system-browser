<template>
  <el-container class="page">
    <el-header class="head">
      <el-icon-back class="el-icon" @click="gotoBack"/>
      <p>{{ cname+`(${cnum}课时)` }}</p>
      <div class="el-icon"/>
    </el-header>
    <div class="header"></div>
    <el-main class="main">
      <el-card class="box-card" v-for="item,index in list" :key="index">
        <el-row>
          <el-col :span="12">{{ item.APTIME }}</el-col>
          <el-col :span="12">{{ item.LNAME }}</el-col>
        </el-row>
        <el-row class="fit-text-margin">
          <el-col :span="12">{{ `第${index+1}课时` }}</el-col>
          <el-col :span="12">{{ item.SNUM+'/'+item.CPNUM }}</el-col>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
  import teacher from '../../api/teacher.js'
export default {
  data() {
    return {
      cid: this.$route.query.cid,
      cname: this.$route.query.cname,
      cnum: this.$route.query.cnum,
      list: []
    }
  },
  methods: {
    async _initList(){
      const res = await teacher.getSmall(this.cid)
      console.log(res)
      if(res.status == 200){
        const rm = res.data
        this.list = rm
        return ;
      }
    },
    gotoBack(){
      this.$router.go(-1)
    }
  },
  mounted() {
    this._initList()
  }
}
</script>

<style scoped lang="less">
  .box-card {
    width: 80%;
    border-radius: 20px;
    margin-top: @itemMarginHeight;
    background-color: @themeLightColor;
  }
</style>
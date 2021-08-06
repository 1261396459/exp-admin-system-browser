<template>
  <el-card class="box-card" v-for="item,index in list" :key="index">
    <el-row>
      <el-col :span="12">{{ item.CNAME }}</el-col>
      <el-col :span="12">{{ item.LNAME }}</el-col>
    </el-row>
    <el-row class="fit-text-margin">
      <el-col :span="12">{{ item.TIME }}</el-col>
      <el-col :span="12">{{ item.TNAME }}</el-col>
    </el-row>
  </el-card>
</template>

<script>
  import Student from '../../api/student.js'
export default {
  data() {
    return {
      uid: this.$store.state.token.uid,
      list: []
    }
  },
  methods: {
    async _initList(){
      const res = await Student.getCourses(this.uid)
      console.log(res)
      if(res.status == 200){
        this.list = res.data
        return ;
      }
      this.$message.warning('无实验课')
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
    height: 88px;
    border-radius: 20px;
    margin-top: @itemMarginHeight;
    background-color: @themeLightColor;
  }
</style>

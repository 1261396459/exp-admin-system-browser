<template>
  <el-container class="page">
    <el-header class="head">
      <el-icon-back class="el-icon" @click="gotoBack"/>
      <p>{{$route.name}}</p>
      <el-icon-check class="el-icon" @click="submit"/>
    </el-header>
    <div class="header"></div>
    <el-main class="main">
      <el-row>
        <el-col :span="8">课程</el-col>
        <el-col :span="16">
          <el-select  v-model="cid" placeholder="选择课程" @change="_initLList">
            <el-option
              v-for="item,index in courseList"
              :key="index"
              :label="item.CNAME"
              :value="item.CID"
              filterable
            >
            </el-option>
          </el-select>
        </el-col> 
      </el-row>
      <el-row>
        <el-col :span="8">可选实验室</el-col>
        <el-col :span="16">
          <el-select v-model="lname" placeholder="选择实验室">
            <el-option
              v-for="item,index in labList"
              :key="index"
              :label="item.LNAME"
              :value="item.LNAME"
              filterable
            >
            </el-option>
          </el-select>
        </el-col> 
      </el-row>
      <el-row>
        <el-col :span="8">上课时间</el-col>
        <el-col :span="16">
          <el-input v-model="aptime"></el-input>
        </el-col> 
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import teacher from '../../api/teacher.js'
export default {
  data() {
    return {
      uid: this.$store.state.token.uid,
      courseList: [],
      cid: null,
      labList: [],
      lname: null,
      aptime: null
    }
  },
  methods: {
    async _initCList(){
      const res = await teacher.getBigs(this.uid)
      console.log(res)
      if(res.status == 200){
        const rm = res.data
        this.courseList = rm
        return ;
      }
    },
    async _initLList(eid){
      console.log(eid);
      const res = await teacher.getBigCanApply(eid)
      console.log(res)
      if(res.status == 200){
        const rm = res.data
        this.labList = rm
        return ;
      }
    },
    async _setExp(){
      const res = await teacher.submitApply(this.cid, this.lname, this.aptime)
      console.log(res)
      if(res.status == 200){
        this.gotoBack()
        return ;
      }
    },
    submit(){
      this._setExp()
    },
    gotoBack(){
      this.$router.go(-1)
    }
  },
  mounted() {
    this._initCList()
  }
}
</script>

<style scoped lang="less">
  .el-input {
    width: 90%;
  }
  .el-row {
    width: 90%;
  }
</style>

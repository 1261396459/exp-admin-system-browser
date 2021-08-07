<template>
  <el-container class="page">
    <el-header class="head">
      <el-icon-back class="el-icon" @click="gotoBack"/>
      <p>设置实验课</p>
      <el-icon-check class="el-icon" @click="submit"/>
    </el-header>
    <div class="header"></div>
    <el-main class="main">
      <el-descriptions :column="1" direction="horizontal" style="width: 100%;">
        <el-descriptions-item label="课程">
          <el-select v-model="cid" placeholder="选择课程" @change="_initClassList">
            <el-option
              v-for="item,index in list"
              :key="index"
              :label="item.CNAME"
              :value="item.CID">
            </el-option>
          </el-select>
        </el-descriptions-item>
        <el-descriptions-item label="上课班级">
          <el-select v-model="classSelected" multiple placeholder="上课班级" disabled>
            <el-option
              v-for="item,index in classAll"
              :key="index"
              :label="item.CLNAME"
              :value="item.CLNAME">
            </el-option>
          </el-select>
        </el-descriptions-item>
        <el-descriptions-item label="上课人数">
          <el-input v-model="expPerNum" disabled/>
        </el-descriptions-item>
        <el-descriptions-item label="实验课节数">
          <el-input v-model="expNum" />
        </el-descriptions-item>
      </el-descriptions>
    </el-main>
  </el-container>
</template>

<script>
  import teacher from '../../api/teacher.js'
export default {
  data() {
    return {
      uid: this.$store.state.token.uid,
      list: [],
      cid: null,
      classAll: [],
      classSelected: [],
      expPerNum: 0,
      expNum: null
    }
  },
  methods: {
    async _initList(){
      const res = await teacher.getCanBig(this.uid)
      console.log(res)
      if(res.status == 200){
        const rm = res.data
        this.list = rm
        return ;
      }
    },
    async _initClassList(eid){
      console.log(eid);
      const res = await teacher.getClass(eid)
      console.log(res)
      if(res.status == 200){
        const rm = res.data
        this.classAll = rm
        rm.forEach((item)=>{
          this.classSelected.push(item.CLNAME)
          this.expPerNum += item.CLPNUM
        })
        return ;
      }
    },
    async _setExp(){
      const res = await teacher.alertBig(this.cid, this.expNum)
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
    this._initList()
  }
}
</script>

<style scoped lang="less">
  .el-input {
    width: 60%;
  }
</style>

<template>
  <el-container class="page">
    <el-header class="head">
      <el-icon-back class="el-icon" @click="gotoBack"/>
      <p>{{ '实验室 '+lname }}</p>
      <div class="el-icon"/>
    </el-header>
    <div class="header"></div>
    <el-main class="main">
      <el-descriptions :column="1" direction="horizontal" style="width: 100%;">
        <el-descriptions-item label="实验室名">{{ lname }}</el-descriptions-item>
        <el-descriptions-item label="容纳人数">
          <el-input v-model="lnum" style="width: 80%;">
            <template #append>
              <el-button @click="submit">确定</el-button>
            </template>
          </el-input>         
        </el-descriptions-item>
      </el-descriptions>
      <el-transfer
          v-model="support"
          filterable
          filter-placeholder="搜索课程"
          :data="list"
          :titles="['可选课程','支持课程']"
          @change="alertSup"
      />
    </el-main>
  </el-container>
</template>

<script>
  import adminer from '../../api/adminer.js'
export default {
  data() {
    return {
      lname: this.$route.query.lname,
      lnum: this.$route.query.lnum,
      list: [],
      support: [],
      row: []
    }
  },
  methods: {
    async _initSource(){
      const res = await adminer.getNSupC(this.lname)
      console.log(res)
      if(res.status == 200){
        res.data.forEach((item)=>{
          this.list.push({
            key: item.CID,
            label: item.CNAME
          })
        })
        return ;
      }
    },
    async _initTarget(){
      const res = await adminer.getSupC(this.lname)
      console.log(res)
      if(res.status == 200){
        res.data.forEach((item)=>{
          this.list.push({
            key: item.CID,
            label: item.CNAME
          })
          this.support.push(item.CID)
        })
        this.row = JSON.parse(JSON.stringify(this.support))
        return ;
      }
    },
    async _alertNum(){
      const res = await adminer.changeLabNum(this.lname, this.lnum)
      console.log(res)
      if(res.status == 200){
        return ;
      }
    },
    async _addSup(eid){
      const res = await adminer.addSC(this.lname, eid)
      console.log(res)
      if(res.status == 200){
        return ;
      }
    },
    async _delSup(eid){
      const res = await adminer.delSC(this.lname, eid)
      console.log(res)
      if(res.status == 200){
        return ;
      }
    },
    alertSup(nowL, direction, transL){
      console.log(nowL, direction, transL);
      if(direction == 'right'){
        transL.forEach((item)=>{
          this._addSup(item)
        })
      }
      else{
        transL.forEach((item)=>{
          this._delSup(item)
        })
      }
    },
    submit(){
      this._alertNum()
    },
    gotoBack(){
      this.$router.go(-1)
    }
  },
  mounted() {
    this._initSource()
    this._initTarget()
  }
}
</script>

<style scoped lang="less">
.main {

}
.transfer-item {
  height: 40px;
  margin-top: 10px;
  .flexColHorCenter();
}

</style>
<style lang="less">
  .el-transfer-panel {
    width: 40%;
  }
  .el-transfer__buttons {
    width: 20%;
    padding: 0;
    text-align: center;
  }
  .el-transfer__button {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  .el-button + .el-button {
      margin: 0;
  }
</style>
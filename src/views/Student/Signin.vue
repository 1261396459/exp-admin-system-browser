<template>
  <el-card class="box-card" v-for="item,index in list" :key="index">
    <el-descriptions :title="item.CNAME+`(${item.EID})`" :column="1" direction="horizontal">
      <el-descriptions-item label="地点">{{ item.LNAME }}</el-descriptions-item>
      <el-descriptions-item label="时间">{{ item.TIME }}</el-descriptions-item>
      <el-descriptions-item label="任课老师" :span="2">{{ item.TNAME }}</el-descriptions-item>
      <el-descriptions-item label="签到状态">
        <el-button v-if="sign.indexOf(item.APID) > -1" disabled>已签到</el-button>
        <el-button v-else @click="_toSignIn(item.APID)">签到</el-button>
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
  
</template>

<script>
  import Student from '../../api/student.js'
export default {
  data() {
    return {
      uid: this.$store.state.token.uid,
      list: [],
      sign: []
    }
  },
  methods: {
    initThis(){
      this._initList()
      this._initSigned()
    },
    async _initList(){
      const res = await Student.getSigning(this.uid)
      console.log(res)
      if(res.status == 200){
        this.list = res.data
        return ;
      }
      this.$message.warning('无签到')
    },
    async _initSigned(){
      const res = await Student.getSigned(this.uid)
      console.log(res)
      if(res.status == 200){
        let temp = []
        for(let item of res.data){
          console.log(item)
          temp.push(item.APEID)
        }          
        this.sign = temp
        return ;
      }
    },
    async _toSignIn(apid){
      const res = await Student.toSignIn(this.uid,apid)
      console.log(res)
      if(res.status == 200){
        this.$message.success('签到成功')
        this.initThis()
        return ;
      }
      this.$message.fail('签到失败')
    }
  },
  mounted() {
    this.initThis()
  }
}
</script>

<style scoped lang="less">
  .box-card{
    width: 90%;
    margin-top: @itemMarginHeight;
  }
</style>

<template>
  <div class="content">
    <el-radio-group v-model="status" size="medium" class="selector">
      <el-radio-button label="11">未批复</el-radio-button>
      <el-radio-button label="222">未同意</el-radio-button>
      <el-radio-button label="3333">已同意</el-radio-button>
      <el-radio-button label="0123">全部</el-radio-button>
    </el-radio-group>
    <el-card v-for="item,index in list" :key="index" v-show="item.RESULT == (status+'')[item.RESULT]" class="box-card">
      <el-row>
        <el-col :span="8">申请实验室</el-col>
        <el-col :span="16">{{item.LNAME}}</el-col> 
      </el-row>
      <el-row>
        <el-col :span="8">申请时间</el-col>
        <el-col :span="16">{{item.APTIME}}</el-col> 
      </el-row>
      <el-row>
        <el-col :span="8">申请课程</el-col>
        <el-col :span="16">{{item.CNAME+`(${item.EID})`}}</el-col> 
      </el-row>
     <el-row>
        <el-col :span="8">上课班级</el-col>
        <el-col :span="16">{{item.CLNs}}</el-col> 
      </el-row>
      <el-row v-if="item.RESULT=='2'">
        <el-col :span="8">申请回复</el-col>
        <el-col :span="16">{{item.APCOMMENT}}</el-col> 
      </el-row>
    </el-card>
    <el-button class="event" type="primary" icon="el-icon-plus" circle @click="gotoSetApply"/>
  </div>
</template>

<script>
  import teacher from '../../api/teacher.js'
export default {
  data() {
    return {
      uid: this.$store.state.token.uid,
      list: [],
      status: 11,
    }
  },
  methods: {
    async _initList(){
      const res = await teacher.getApplys(this.uid)
      console.log(res)
      if(res.status == 200){
        this.list = res.data
        return ;
      }
      this.$message.warning('无申请')
    },
    gotoSetApply(){
      this.$router.push('/teacher/set-apply')
    }
  },
  mounted() {
    this._initList()
  }
}
</script>

<style scoped lang="less">
  .selector {
    width: 100%;
  }
  .content {
    width: 100%;
    .flexColHorCenter();
  }
  .box-card {
    width: 80%;
    border-radius: 20px;
    margin-top: @itemMarginHeight;
  }
  .event {
    width: 60px;
    height: 60px;
    position: fixed;
    bottom: @footerHeight+@baseMargin*3;
    right: @baseMargin*3;
  }
</style>
<style lang="less">
  .el-radio-group {
    .flexRowHorAround();
  }
</style>

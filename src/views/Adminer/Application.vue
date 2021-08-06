<template>
  <div class="main-content">
    <el-radio-group v-model="status" size="medium" class="selector">
      <el-radio-button label="11">未批复</el-radio-button>
      <el-radio-button label="222">未同意</el-radio-button>
      <el-radio-button label="3333">已同意</el-radio-button>
      <el-radio-button label="0123">全部</el-radio-button>
    </el-radio-group>
    <el-checkbox-group v-model="checked" class="content">
      <el-card v-for="item,index in list" :key="index" v-show="item.RESULT == (status+'')[item.RESULT]" class="box-card">
        <el-checkbox :label="item.APID" :disabled="status!=11">
          <el-row>{{item.LNAME}}</el-row>
          <el-row>{{item.APTIME}}</el-row>
          <el-row>{{item.CNAME+`(${item.EID})`}}</el-row>
          <el-row>{{item.CPNUM+'/'+item.SPN}}</el-row>
          <el-row v-if="item.RESULT=='2'">{{item.APCOMMENT}}</el-row>
          <el-row v-if="isRufuse">
            <el-input v-model="commentList[item.APID]"></el-input>
          </el-row>
        </el-checkbox>
      </el-card>
    </el-checkbox-group>
    <el-button type="success" circle class="event" id="accept" :disabled="status!=11||checked.length==0" @click="_acceptAll">通过</el-button>
    <el-button type="danger" circle class="event" id="refuse" :disabled="status!=11||checked.length==0" @click="_refuseAll">拒绝</el-button>
  </div>
</template>

<script>
  import adminer from '../../api/adminer.js'
export default {
  data() {
    return {
      uid: this.$store.state.token.uid,
      list: [],
      status: 11,
      checked: [],
      commentList: {},
      isRufuse: false
    }
  },
  methods: {
    async _initList(){
      const res = await adminer.getApply(this.uid)
      console.log(res)
      if(res.status == 200){
        this.list = res.data
        return ;
      }
      this.$message.warning('无管理的实验室')
    },
    async _agreeApply(apid){
      const res = await adminer.agree(apid)
      console.log(res)
      if(res.status == 200){
        console.log('true',apid)
        this._initList()
        return ;
      }
      console.log('false',apid)
    },
    async _disagreeApply(apid){
      const res = await adminer.disagree(apid,this.commentList[apid])
      console.log(res)
      if(res.status == 200){
        console.log('true',apid)
        this._initList()
        return ;
      }
      console.log('false',apid)
    },
    async _acceptAll(){
      this.checked.forEach((item)=>{
        this._agreeApply(item)
      })
    },
    async _refuseAll(){
      if(this.isRufuse){
        this.checked.forEach((item)=>{
          this._disagreeApply(item)
        })
        this.isRufuse = false
      }
      else{
        this.isRufuse = true
      }
    },
  },
  mounted() {
    this._initList()
  }
}
</script>

<style scoped lang="less">
  .main-content {
    
  }
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
  }
  #accept {
    position: fixed;
    bottom: @footerHeight+@baseMargin;
    left: @baseMargin;
  }
  #refuse {
    position: fixed;
    bottom: @footerHeight+@baseMargin;
    right: @baseMargin;
  }
</style>
<style lang="less">
  .el-radio-group {
    .flexRowHorAround();
  }
</style>

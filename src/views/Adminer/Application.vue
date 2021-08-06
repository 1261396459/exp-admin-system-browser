<template>
  <div class="main-content">
    <el-radio-group v-model="status" size="medium" class="selector">
      <el-radio-button label="11">未批复</el-radio-button>
      <el-radio-button label="222">未同意</el-radio-button>
      <el-radio-button label="3333">已同意</el-radio-button>
      <el-radio-button label="0123">全部</el-radio-button>
    </el-radio-group>
    <el-checkbox-group v-model="checked" class="content">
      <el-card v-for="item,index in list" :key="index" v-show="item.RESULT == status[item.RESULT]" class="box-card">
        <el-checkbox :label="item.APID">
          <el-row>{{item.LNAME}}</el-row>
          <el-row>{{item.APTIME}}</el-row>
          <el-row>{{item.CNAME+`(${item.EID})`}}</el-row>
          <el-row>{{item.CPNUM+'/'+item.SPN}}</el-row>
        </el-checkbox>
      </el-card>
    </el-checkbox-group>
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
      checked: []
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
</style>
<style lang="less">
  .el-radio-group {
    .flexRowHorAround();
  }
</style>

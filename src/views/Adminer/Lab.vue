<template>
  <el-card class="box-card" v-for="item,index in list" :key="index">
    <el-descriptions :column="1" direction="horizontal">
      <el-descriptions-item label="实验室名">{{ item.LNAME }}</el-descriptions-item>
      <el-descriptions-item label="容纳人数">{{ item.SPN }}</el-descriptions-item>
      <el-descriptions-item label="支持课程" width="100%" :span="1">
        <div class="supc">{{ item.SPCs }}</div>
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script>
  import adminer from '../../api/adminer.js'
export default {
  data() {
    return {
      uid: this.$store.state.token.uid,
      list: []
    }
  },
  methods: {
    async _initList(){
      const res = await adminer.getLabs(this.uid)
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
  .box-card {
    width: 80%;
    border-radius: 20px;
    margin-top: @itemMarginHeight;
  }
  .supc {
    width: 50%;
    word-wrap: break-word; 
  }
</style>
<style></style>

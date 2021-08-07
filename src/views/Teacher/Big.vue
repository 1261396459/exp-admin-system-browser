<template>
  <el-card class="box-card" v-for="item,index in list" :key="index" @click="gotoSmall(item.CID,item.CNAME,item.CNUM)">
    <el-row>
      <el-col :span="20">
        <el-row>
          <el-col :span="18">{{ item.CNAME }}</el-col>
          <el-col :span="6">{{ item.CNUM }}</el-col>
        </el-row>
        <el-row class="fit-text-margin">
          <el-col :span="18">{{ item.CLNs }}</el-col>
        </el-row>
      </el-col>
      <el-col :span="4" class="ver-center">
        <el-icon-right></el-icon-right>
      </el-col>
    </el-row>
  </el-card>
  <el-button class="setExp" type="primary" icon="el-icon-plus" circle @click="gotoSetExp"></el-button>
</template>

<script>
  import teacher from '../../api/teacher.js'
export default {
  data() {
    return {
      uid: this.$store.state.token.uid,
      list: []
    }
  },
  methods: {
    async _initList(){
      const res = await teacher.getBigs(this.uid)
      console.log(res)
      if(res.status == 200){
        this.list = res.data
        return ;
      }
      this.$message.warning('无实验课')
    },
    gotoSetExp(){
      this.$router.push({ 
        path: '/teacher/set-exp'
      })
    },
    gotoSmall(cid,cname,cnum){
      this.$router.push({
        path: '/teacher/small',
        query: {
          cid,
          cname,
          cnum
        }
      })
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
  .ver-center {
    .flexRowVerCenter();
  }
  .setExp {
    position: fixed;
    right: @baseMargin*3;
    bottom: @baseMargin*3+@footerHeight;
  }
</style>

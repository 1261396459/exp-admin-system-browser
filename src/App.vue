<template>
  <router-view class="page"/>
</template>

<style lang="less">
  // 以下是全局固定样式配置
  html,body {
    .aboundContainer();
  }  
  // body
  .page {
    .aboundContainer();
  }
  .fit-text-margin {
    margin-top: @baseMargin;
  }
  .fit-button-margin {
    margin-top: @TopBtmGapping;
  }
</style>

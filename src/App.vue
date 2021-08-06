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
    background-color: @PageColor;
    .aboundContainer();
  }
  .header {
    height: @headerHeight; width: 100%;
    z-index: 0;
  }
  .footer {
    height: @footerHeight; width: 100%;
    z-index: 0;
  }
  .footer-text {
    .flexColHorCenter();
    text-decoration: none;
    font-weight: bold;
    font-family: "PingFang SC";
    color: @themeDarkColor;
    font-size: @smallFont;
  }
  .fit-text-margin {
    margin-top: @baseMargin;
  }
  .fit-button-margin {
    margin-top: @TopBtmGapping;
  }
</style>

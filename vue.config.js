module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      less: {
        globalVars: {
          hack: `true; @import '~@/assets/main.less';`
        }
      }
    }
  }
};
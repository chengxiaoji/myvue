module.exports = {
  devServer:{
    proxy:{
      '/Forum_api':{
        target:'http://forum.chengxiaoji.cn',
        ws:true,
        changeOrigin:true
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}

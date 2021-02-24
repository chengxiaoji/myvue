module.exports = {
  devServer:{
    proxy:{
      '/Forum_api':{
        target:'http://chengxiaoji.cn',
        ws:true,
        changeOrigin:true
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}

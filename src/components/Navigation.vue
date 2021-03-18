<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item index="1" @click="toIndex">首页</el-menu-item>
    <el-menu-item index="2">博客</el-menu-item>
    <el-menu-item index="3">程序员学院</el-menu-item>
    <el-menu-item index="4">下载</el-menu-item>
    <el-menu-item index="5">{{ username }}</el-menu-item>
    <el-menu-item index="6">代码</el-menu-item>
    <el-menu-item index="10" style="float: right" v-if="isLogin">账户管理</el-menu-item>
    <el-menu-item index="9" style="float: right"  v-if="isLogin">个人中心</el-menu-item>
    <el-menu-item index="8" style="float: right"  v-if="isLogin"  @click="toUserInfo">
      <el-popover
          placement="bottom"
          width="300"
          trigger="hover">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">

          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="2" >
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="3" @click="logOut">
            <i class="el-icon-setting"></i>
            <span slot="title">退出登录</span>
          </el-menu-item>
        </el-menu>
        <el-avatar :size="40" slot="reference" :src="avatar"></el-avatar>
      </el-popover>
    </el-menu-item>

    <el-menu-item index="21" style="float: right" v-if="!isLogin" @click="toSignIn">注册</el-menu-item>
    <el-menu-item index="20" style="float: right" v-if="!isLogin" @click="toLogin">登录</el-menu-item>

    <el-menu-item index="7" style="float: right">
      <el-input
          class="searchInput"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
      >
      </el-input>
    </el-menu-item>
  </el-menu>
</template>

<script>
import api from '../request/api'
export default {
  name: "Navigation",
  data() {
    return {
      activeIndex: '1',
      isLogin: false,
      username: "",
      userID:0,
      avatar:'',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toLogin() {
      this.$router.push('/login')
    },
    toSignIn(){
      this.$router.push('/register')
    },
    toIndex(){
      this.$router.push('/')
    },
    logOut(){
      this.$axios.post("Forum_api/log_out.php")
          .then(res=>{
            console.log(res)
            // location.reload()
            this.$router.push('/')
          })
    },
    getUserInfo() {
      api.login({
      }).then(() => {
        api.getUserLoginStatus()
            .then(res => {
              this.username = res.data['msg']
              this.isLogin=res.data['is_login']
              this.userID=res.data['id']
              this.avatar=res.data['avatar']
              console.log(this.avatar);
            })
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toUserInfo(){
      this.$router.push('/userInfo/'+this.userID)
    }
  },
  mounted() {
    this.getUserInfo()
  }
}
</script>

<style scoped>
.el-menu-demo {
  min-width: 1200px;
}
.el-menu-item {
  border-bottom: none;
}
.el-menu-item.is-active {
  border-bottom: none;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu-vertical-demo.el-menu{
  border-right: none;
}
</style>
<template>
  <div>

    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">博客</el-menu-item>
      <el-menu-item index="3">程序员学院</el-menu-item>
      <el-menu-item index="4">下载</el-menu-item>
      <el-menu-item index="5">论坛</el-menu-item>
      <el-menu-item index="6">{{username}}</el-menu-item>
      <el-menu-item index="10" style="float: right" v-if="isLogin">账户管理</el-menu-item>
      <el-menu-item index="9" style="float: right"  v-if="isLogin">个人中心</el-menu-item>
      <el-menu-item index="11" style="float: right" @click="toRegister" v-if="!isLogin">注册</el-menu-item>
      <el-menu-item index="12npm" style="float: right" @click="toLogin" v-if="!isLogin">登录</el-menu-item>
      <el-menu-item index="8" style="float: right" v-if="isLogin">
        <el-popover
            placement="bottom"
            width="400"
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
            <el-menu-item index="3" @click="log_out">
              <i class="el-icon-setting"></i>
              <span slot="title">退出登录</span>
            </el-menu-item>
          </el-menu>
          <el-avatar :size="40" slot="reference"></el-avatar>
        </el-popover>
      </el-menu-item>
      <el-menu-item index="7" style="float: right">
        <el-input
            class="searchInput"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
        >
        </el-input>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
name: "Navigation",
  data() {
    return {
      activeIndex: '1',
      username:'',
      isLogin:false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toRegister(){
      this.$router.push('/register')
    },
    toLogin(){
      this.$router.push('/Login')
    },
    log_out(){
      this.$axios.post('Forum_api/log_out.php')
      .then(res =>{
        console.log(res)
         location.reload()
      }
      )
    },
    getUserInfo(){
      this.$axios.post('Forum_api/Login.php')
          .then(()=> {
            this.$axios.post('Forum_api/getUserInfo.php')
                .then(res => {
                  this.username=res.data['msg'];
                  this.isLogin=res.data['isLogin'];
                })
          })

    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
  this.getUserInfo();
  }
}
</script>

<style scoped>

.el-menu-demo {
  min-width: 1100px;
}

.el-menu--horizontal>.el-menu-item {
  border-bottom: none;
}

.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: none;
}
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
</style>
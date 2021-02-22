<template>
  <div class="loginPage">
    <el-card shadow="hover" class="loginCard">
      <el-form :model="loginForm" status-icon ref="ruleForm" class="demo-ruleForm" >
        <el-form-item>
          <h2>登录</h2>
        </el-form-item>
        <el-form-item prop="userName">
          <el-input type="text" v-model="loginForm.userName" placeholder="请输入用户名" style="width: 200px">
            <i class="el-icon-user" slot="prefix"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" style="width: 200px">
            <i class="el-icon-lock" slot="prefix"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')" style="width: 100px;color: white">提交</el-button>
        </el-form-item>
        <el-form-item>
          <el-link type="primary" href="./#/register">没有账号？去注册！</el-link>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        userName: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.loginForm.password);
    },
  }
}
</script>

<style scoped>
.loginPage {
  width: 100vw;
  height: 100vh;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loginCard {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border-radius: 35px;
}
.demo-ruleForm{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
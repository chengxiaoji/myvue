<template>
  <div class="loginPage">
    <el-card shadow="hover" class="loginCard">
      <el-form :model="loginForm" status-icon ref="loginForm" :rules="rules" class="demo-ruleForm" >
        <el-form-item>
          <h2>登录</h2>
        </el-form-item>
        <el-form-item prop="userName">
          <el-input type="text" v-model="loginForm.userName" placeholder="请输入账号" style="width: 200px">
            <i class="el-icon-user" slot="prefix"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" style="margin-bottom: 8px">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" style="width: 200px">
            <i class="el-icon-lock" slot="prefix"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="cookies" class="cookiesInput">
          <el-checkbox label="自动登录" name="type" v-model="loginForm.isSetCookies"></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')" style="width: 100px;color: white">登录</el-button>
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
        isSetCookies:false
      },
      rules:{
        userName:[
          {pattern:/^\w+$/,message:"账号只能包括数字字母和下划线",trigger:'blur'},
          {required:true,message: "账号不能为空！",trigger:'blur'} ,
          {max:20,message: "账号长度最长20位！",trigger:'blur'},
          {min:6,message: "账号长度最少6位！",trigger:'blur'}
        ],
        password: [
          {required:true,message: "密码不能为空！",trigger:'blur'} ,
          {max:20,message: "密码长度最长20位！",trigger:'blur'},
          {min:6,message: "密码长度最少6位！",trigger:'blur'}
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.$md5(this.loginForm.password));
      this.$refs[formName].validate((valid) =>{
        if(valid){
        this.$axios.post('Forum_api/test.php',{
            name:this.loginForm.userName,
            pass:this.$md5(this.loginForm.password),
            isSetCookies:this.loginForm.isSetCookies
          }).then(res => {
          if (res.data['code']===200) {
            this.$router.push('/');
          }
          else{
            this.$message.error(res.data['msg']);

          }
          })
      } else {
        console.log('error submit!!');
        return false;
      }
      });
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
.cookiesInput {
  position: relative;
  height: 20px;
}

</style>
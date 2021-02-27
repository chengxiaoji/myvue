<template>
  <div class="registerPage">
    <el-card shadow="hover" class="registerCard">
      <el-form :model="registerForm" status-icon ref="registerForm" :rules="rules" class="demo-ruleForm" >
        <el-form-item>
          <h2>注册</h2>
        </el-form-item>
        <el-form-item prop="userName">
          <el-input type="text" v-model="registerForm.userName" placeholder="请输入账号" style="width: 200px">
            <i class="el-icon-user" slot="prefix"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="registerForm.password" placeholder="请输入密码" style="width: 200px">
            <i class="el-icon-lock" slot="prefix"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input type="text" v-model="registerForm.email" placeholder="请输入邮箱" style="width: 200px">
            <i class="el-icon-message" slot="prefix"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')" style="width: 100px;color: white">注册</el-button>
        </el-form-item>
        <el-form-item>
          <el-link type="primary" href="./#/login">已有账号？去登录！</el-link>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      registerForm: {
        userName: '',
        password: '',
        email:'',
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
        email:[
          {required:true,message: "邮箱不能为空！",trigger:'blur'} ,
          {pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"邮箱格式不正确！",trigger:'blur'},
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) =>{
        if(valid)
        {this.$axios.post('Forum_api/register.php',{
          name:this.registerForm.userName,
          pass:this.registerForm.password,
          email:this.registerForm.email,
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
.registerPage {
  width: 100vw;
  height: 100vh;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
}
.registerCard {
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
<template>
  <div class="userInfo">
    <Navigation></Navigation>
    <div class="userInfoMain">
      <el-card shadow="always">
        <el-form status-icon :rules="rules" ref="editInfoForm" :model="editInfo"  class="demo-ruleForm"  label-position="left" label-width="80px">
          <el-form-item label="头像" prop="headPortrait" style="height: 200px">
            <v-avatar size="136" style="margin-left: 100px; position: relative" >
              <img  :class="avatarClass" :src="editInfo.headPortrait" alt="未填写" @click="upLoadAvatar" @mouseenter="avatarClass='hover_avatar'"  @mouseleave="avatarClass='avatar'">
              <span class="avatar_span" v-show="avatarClass==='hover_avatar'" @click="upLoadAvatar" @mouseenter="avatarClass='hover_avatar'">上传头像</span>
              <el-input class="avatarInput" type="file" @mouseenter.native="avatarClass='hover_avatar'"></el-input>
            </v-avatar>
          </el-form-item>
          <el-form-item label="昵称" prop="nickname">
            <el-input v-if="editInfo.isOwner" v-model="editInfo.nickname" style="width: 200px;height: 50px"></el-input>
            <el-link  v-else :underline="false" type="info">{{ editInfo.nickname }}</el-link>
          </el-form-item>
          <el-form-item label="简介" prop="introduction">
            <el-input v-if="editInfo.isOwner" type="textarea" v-model="editInfo.introduction" :rows="6" style="width: 400px"></el-input>
            <el-link v-else :underline="false" type="info">{{ editInfo.introduction }}</el-link>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-select v-if="editInfo.isOwner" v-model="editInfo.gender" placeholder="请选择性别">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
            <el-link v-else :underline="false" type="info">{{ editInfo.gender }}</el-link>
          </el-form-item>
          <el-form-item label="生日" prop="birthday">
            <el-col v-if="editInfo.isOwner" :span="11">
              <el-date-picker type="date" placeholder="选择生日" v-model="editInfo.birthday"
                              style="width: 100%;"></el-date-picker>
            </el-col>
            <el-link v-else :underline="false" type="info">{{ editInfo.birthday }}</el-link>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-if="editInfo.isOwner" v-model="editInfo.email" style="width: 300px;"></el-input>
            <el-link v-else :underline="false" type="info">{{ editInfo.email }}</el-link>
          </el-form-item>
          <el-form-item label="所在地" prop="location">
            <el-input v-if="editInfo.isOwner" v-model="editInfo.location" style="width: 300px;"></el-input>
            <el-link v-else :underline="false" type="info">{{ editInfo.location }}</el-link>
          </el-form-item>
          <el-form-item>
            <el-button v-if="editInfo.isOwner" type="primary" @click="submitForm('editInfoForm')" style="color: aliceblue;">保存</el-button>
          </el-form-item>
        </el-form>

      </el-card>
    </div>
    <forumFooter></forumFooter>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import forumFooter from "@/components/forumFooter";
import api from '../request/api'
export default {
  name: "userInfo",
  components: {
    Navigation,
    forumFooter
  },
  data() {
    return {
      info: {
        nickname: '',
        gender: '',
        birthday: '',
        email: '',
        headPortrait: '',
        location: '',
        introduction: ''
      },
      editInfo: {
        userID: 0,
        isOwner: false,
        nickname: '',
        gender: '',
        birthday: '',
        email: '',
        headPortrait: '',
        location: '',
        introduction: ''
      },
      rules: {
        nickname: [
          {max: 20, message: '昵称长度最长20位', trigger: 'blur'},
          {min: 4, message: '昵称长度最小4位', trigger: 'blur'}
        ],
        email: [
          {pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: '邮箱不符合格式！', trigger: 'blur'},
        ],
      },
      avatarClass:'avatar',
      test: ''
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.editUserInfo({
            editInfo: this.editInfo
          })
              .then(res => {
                if (res.data['code'] === 200) {
                  this.$message.success(res.data['msg'])
                  this.getUserInfo()
                } else {
                  this.$message.error(res.data['msg'])
                }
              })
        }else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    getUserInfo() {
      api.getUserInfo({
        userID: this.$route.params.id
      })
          .then(res => {
            console.log(res.data)
            this.editInfo = res.data
          })
    },
    upLoadAvatar(){
      console.log(1)
    }
  },
  mounted() {
    this.test = this.$route.params.id
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userInfoMain {
  height: 100vh;
  width: 50vw;
  margin: 30px auto;
  min-width: 750px;
}
.el-card {
  padding: 100px;
  border-radius: 30px;
  width: 100%;
  height: 100%;
}
.avatar{
  opacity: 1;
  cursor: pointer;
}
.hover_avatar{
  filter:brightness(50%);
  cursor: pointer;
}
.avatar_span{
  position: absolute;
  color: aliceblue;
  cursor: pointer;
}
.avatarInput{
  position: absolute;
  opacity:0;
  filter:alpha(opacity=0);
  height: 100px;
  width: 100px;
  cursor: pointer;
  z-index: 9;
}
.el-card[data-v-43004aba]{
  padding:50px;
}
/*/deep/ .el-input__inner{*/
/*  height: 100px;*/
/*  width: 100px;*/
/*}*/
/*.el-input__inner*/
</style>
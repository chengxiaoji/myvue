<template>
  <div class="userInfo">
    <Navigation></Navigation>
    <div class="userInfoMain">
      <el-card shadow="always">
        <el-form status-icon :rules="rules" ref="editInfoForm" :model="editInfo"  class="demo-ruleForm"  label-position="left" label-width="80px">
          <el-form-item label="头像" prop="headPortrait" >
            <v-avatar size="100" >
              <img  :class="avatarClass" :src="editInfo.headPortrait" alt="未填写" >
            </v-avatar>
            <el-upload
                v-if="editInfo.isOwner"
                class="avatarUploader"
                drag
                action="http://forum.chengxiaoji.cn/Forum_api/uploadAvatar.php"
                :before-upload="beforeAvatarUpload"
                multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpeg、jpg、png、gif、webp文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="昵称" prop="nickname">
            <el-input v-if="editInfo.isOwner" v-model="editInfo.nickname" style="width: 200px;"></el-input>
            <el-link  v-else :underline="false" type="info">{{ editInfo.nickname }}</el-link>
          </el-form-item>
          <el-form-item label="简介" prop="introduction">
            <el-input v-if="editInfo.isOwner" type="textarea" v-model="editInfo.introduction" :rows="8"></el-input>
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
            this.editInfo = res.data
          })
    },
    beforeAvatarUpload(file){
      const fileSize = file.size / 1024  <= 500  //1MB
      if (!fileSize) {
        this.$message.error('上传头像图片大小不能超过 500KB!')
      }
      return fileSize
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
  /*height: 100vh;*/
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
/deep/ .avatarUploader .el-upload-dragger{
  display: inline-block;
  margin-top: 30px;
}
</style>
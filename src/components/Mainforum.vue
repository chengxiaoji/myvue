Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore

@chengxiaoji
shaobaitao
/
VueForum
1
00
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
VueForum/src/components/MainForum.vue
@shaobaitao
shaobaitao myvue 2.8
Latest commit 3a5c182 1 hour ago
History
1 contributor
135 lines (112 sloc)  2.91 KB

<template>
  <div class="mainForum">
    <el-row>
      <el-col :span="16">

        <div class="forumItem" style="height: 250px">
          <el-carousel :interval="4000" type="card" height="220px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="forumItem" >
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>热门帖子</span>
              <el-button style="float: right; padding: 3px 0" type="text">查看全部</el-button>
            </div>
            <ForumWindow></ForumWindow>
          </el-card>
        </div>

        <div class="forumItem" >
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>最新帖子</span>
              <el-button style="float: right; padding: 3px 0" type="text">查看全部</el-button>
            </div>
            <ForumWindow></ForumWindow>
          </el-card>
        </div>
      </el-col>

      <el-col :span="8">
        <div class="forumItem" style="height: 200px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
          </el-card>
        </div>
        <div class="forumItem" style="height: 300px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
          </el-card>
        </div>
        <div class="forumItem" style="height: 400px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
          </el-card>
        </div>
      </el-col>

    </el-row>

  </div>

</template>

<script>
import ForumWindow from "@/components/ForumWindow";
export default {
  name: "MainForum",
  components:{
    ForumWindow,
  }
}
</script>

<style scoped>
.mainForum {
  /*padding: 10px;*/
  width: 1200px;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.forumItem {
  margin: 10px;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.box-card {
  width: 100%;
  height: 100%;
}
/deep/ .el-card__body{
  padding: 0;
}
</style>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About

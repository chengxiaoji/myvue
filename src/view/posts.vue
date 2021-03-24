<template>
  <div class="post">
    <Navigation></Navigation>
    <div class="postMain">
      <el-card shadow="always" class="postLeft">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="热门帖子" name="first">
            <ForumWindow :data="hotItemInfo" :size="10"></ForumWindow>
            <div class="pagination">
              <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleHotCurrentChange"

                  :page-size="10"
                  layout="prev, pager, next, jumper"
                  :total="postCount">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="最新帖子" name="second">
            <ForumWindow :data="newItemInfo" :size="10"></ForumWindow>
            <div class="pagination">
              <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleNewCurrentChange"

                  :page-size="10"
                  layout="prev, pager, next, jumper"
                  :total="postCount">
              </el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
      <el-card shadow="always" class="postRight">
        <div slot="header" class="clearfix">
          <span>今日推荐</span>
        </div>
      </el-card>
    </div>
    <forumFooter></forumFooter>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import forumFooter from "@/components/forumFooter";
import ForumWindow from "@/components/ForumWindow";
import api from '../request/api.js'
export default {
  name: "post",
  data() {
    return {
      activeName: 'second',
      currentPage1: 1,
      hotItemInfo: [],
      newItemInfo: [],
      postCount: 0,
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleHotCurrentChange(val) {
      this.getPostInfo((val-1)*10,10,'hot')
    },
    handleNewCurrentChange(val) {
      this.getPostInfo((val-1)*10,10,'new')
    },
    getPostInfo(startIndex, num, type) {
      api.getPostInfo({
        startIndex: startIndex,
        num: num,
        type: type
      }).then(res => {
        switch (type){
          case 'hot':
            this.hotItemInfo = res.data
            break;
          case 'new':
            this.newItemInfo = res.data
            break;
        }
      })
    },
    getPostCount() {
      api.getPostCount().then(res => {
        this.postCount = res.data
        console.log(this.postCount)
      })
    }
  },
  mounted() {
    this.getPostInfo(0, 10, 'hot')
    this.getPostInfo(0, 10, 'new')
    this.getPostCount()
  },
  components: {
    ForumWindow,
    Navigation,
    forumFooter
  },
}
</script>

<style scoped>
.postMain {
  display: flex;
  justify-content: center;
  align-items: center;
  /*flex-direction: column;*/
  width: 1200px;
  margin: 40px auto;
}
.postLeft {
  margin: 10px;
  width: 75%;
  height: 990px;
}
.postRight {
  margin: 10px;
  width: 25%;
  height: 990px;
}
/deep/ .el-card__body{
  height: 100%
}
/deep/ .el-tabs{
  height: 100%
}
/deep/ .el-tabs__content{
  height: 100%
}
/deep/ .el-tab-pane{
  position: relative;
  height: calc(100% - 40px);
}
.pagination {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
}
</style>
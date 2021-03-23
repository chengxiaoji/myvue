<template>
  <div class="post">
    <Navigation></Navigation>
    <div class="postMain">
      <el-card shadow="always" class="postLeft">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="热门帖子" name="first">
            <ForumWindow :data="hotItemInfo"></ForumWindow>
            <div class="pagination">
              <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="hotCurrentPage"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="最新帖子" name="second">
            <ForumWindow  :data="newItemInfo"></ForumWindow>
            <div class="pagination">
              <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="newCurrentPage"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000">
              </el-pagination>
            </div>
          </el-tab-pane>
          <!--            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>-->
          <!--            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>-->
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
// import api from '../request/api'
export default {
  name: "post",
  data() {
    return {
      activeName: 'second',
      currentPage1: 1,
      hotItemInfo: [
        {
          title: '蓝桥杯之Python算法设计系列（二）',
          username: '王小王-123',
          content: '基础算法案例1.特殊回文数问题描述：左边往右边看，右边往左边看，都是同一个数叫做回文数，比如19291就是一个回文数，那么我们输入一个两位及以上的数字，返回回文数，案例如下：def is_pal(i_):    i_s = str(i_)    if i_s == i_s[::-1]:        return True    else:        return Falsen=int(input("输入大于10的数："))i = 10while i ',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python游戏(1) —— 猜单词',
          username: '略略略咯',
          content: 'python猜单词小游戏猜单词小游戏对单词字母的重新排序循环猜测环节完整代码参考来源猜单词小游戏利用python实现一个猜单词的小游戏，需要导入的库为random库。设计逻辑：从单词列表中随机选取一个单词，对单词里的字母顺序进行重新随机排序，从而产生新的字符串，玩家通过这个新的字符串猜测原单词。对单词字母的重新排序先处理这个程序的核心代码就是如何生成乱序的单词',
          likes: 242,
          views: 123,
          comments: 654,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }
      ],
      newItemInfo: [
        {
          title: '计算机视觉——图像处理基础章节内容（作业一）',
          username: 'weixin_43873802',
          content: '计算机视觉——图像处理基础章节内容（作业一）学习内容要求python对图像处理的基础运用一、直方图二、直方图均衡化三、高斯滤波学习内容要求  完成图像处理基础章节内容，包括直方图、高斯滤波、直方图均衡化的结果及其基本原理Python计算机视觉编程',
          likes: 1666,
          views: 524,
          comments: 676,
        }, {
          title: 'python压缩图片为小于指定大小',
          username: '大帅带你学python\n',
          content: 'import sysimport ioimport osfrom PIL import Imagefrom PIL import ImageFile#sys.setrecursionlimit(18)def compress_image(outfile, mb=190, quality=85, k=0.9):    """不改变图片尺寸压缩到指定大小    :param outfile: 压缩文件保存地址    :param mb: 压缩目标，KB    :param step..',
          likes: 343,
          views: 777,
          comments: 12,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
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
  height: 100%;
}
.postRight {
  margin: 10px;
  width: 25%;
  height: 990px;
}
.pagination{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
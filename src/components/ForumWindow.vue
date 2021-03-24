<template>
  <v-list flat>
    <v-list-item-group
        v-model="selectedItem"
        color="primary"
    >
      <v-skeleton-loader
          v-for="(item, i) in size"
          :key="i"
          v-bind="attrs"
          type="list-item-avatar-three-line"
          v-show="data.length===0"

      ></v-skeleton-loader>
      <v-list-item
          v-for="(item, i) in data"
          :key="i"
          two-line
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle>
            <div class="listSecondLine">
              <div class="listLineUser">
                <el-avatar :size="24" slot="reference" :src="item.headPortrait"></el-avatar>
                <a style="margin-left: 5px; color: #757575">{{ item.nickname }}</a>
              </div>
              <div class="listLineContent">
                {{ item.content }}
              </div>
              <div class="listLineOperation">
                <el-link style="font-size: 16px" :underline="false" icon="iconfont el-icon-dianzan">{{item.likes }}</el-link>
                <el-link style="font-size: 16px" :underline="false" icon="iconfont el-icon-mimakejian">{{item.views }}</el-link>
                <el-link style="font-size: 16px" :underline="false" icon="iconfont el-icon-pinglun">{{item.comments }}</el-link>
              </div>
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "ForumWindow",
  data() {
    return {
      attrs: {
        class: 'mb-auto',
        boilerplate: true,
        elevation: 2,
        height:86
      },
      selectedItem: 1,
      items: [
        {text: '算法案例1.特殊回文数问题描述：左边往右边看，右边往左算法案例1.特殊回文数问题描述：左边往右边看，右边往左', icon: 'mdi-clock'},
        {text: 'Audience', icon: 'mdi-account'},
        {text: 'Conversions', icon: 'mdi-flag'},
        {text: 'Conversions', icon: 'mdi-flag'},
        {text: 'Conversions', icon: 'mdi-flag'},
      ],
      listItemInfo: [
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
        },
      ]
    }
  },
  props:['data','size']
}
</script>

<style scoped>

/deep/ .v-list-item{
  height: 84px;
}
.v-list-item__content > *:not(:last-child) {
  font-size: 24px;
  font-weight: 700;
  color: #3d3d3d;
  margin-bottom: 10px;
}
.listSecondLine {
  display: flex;
  justify-items: center;
  align-items: center
}
.listLineUser {
  width: 100px;
  display: flex;
  justify-items: center;
  align-items: center;
  float: left;
}
.listLineContent {
  float: left;
  margin-left: 30px;
  margin-right: 30px;
  width: 400px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.listLineOperation {
  display: flex;
  justify-content: space-around;
  float: right;
  width: 160px;
}
</style>
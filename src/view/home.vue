<template>
<div>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
  style="min-width: 1100px">
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">博客</el-menu-item>
    <el-menu-item index="3">程序员学院</el-menu-item>
    <el-menu-item index="4">下载</el-menu-item>
    <el-menu-item index="5">论坛</el-menu-item>
    <el-menu-item index="6">代码</el-menu-item>
    <el-menu-item index="7" style="float: right">管理中心</el-menu-item>
    <el-menu-item index="8" style="float: right">个人中心</el-menu-item>

    <el-menu-item index="9" style="float: right">



        <el-dropdown>
  <span class="el-dropdown-link">
    <el-avatar :size="40" src="https://empty" @error="errorHandler" ></el-avatar>
  </span>
<!--          下拉菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </el-menu-item>

    <el-input
        class="searchinput"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2">
    </el-input>

  </el-menu>
</div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>
.searchinput{
  float: right;
  width: 260px;
  margin-top: 10px;
  margin-right: 66px;
}
</style>
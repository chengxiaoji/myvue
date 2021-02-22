<template>
  <div>

    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">博客</el-menu-item>
      <el-menu-item index="3">程序员学院</el-menu-item>
      <el-menu-item index="4">下载</el-menu-item>
      <el-menu-item index="5">论坛</el-menu-item>
      <el-menu-item index="6">代码</el-menu-item>
      <el-menu-item index="10" style="float: right">账户管理</el-menu-item>
      <el-menu-item index="9" style="float: right" @click="toLogin">个人中心</el-menu-item>
      <el-menu-item index="8" style="float: right">
        <el-popover
            placement="bottom"
            width="400"
            trigger="hover">
          <el-table>
            <el-table-column width="150" property="date" label="日期"></el-table-column>
            <el-table-column width="100" property="name" label="姓名"></el-table-column>
            <el-table-column width="300" property="address" label="地址"></el-table-column>
          </el-table>
          <el-avatar :size="40" slot="reference"></el-avatar>

        </el-popover>
      </el-menu-item>
      <el-menu-item index="7" style="float: right">
        <el-input
            class="searchInput"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
        >
        </el-input>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
name: "Navigation",
  data() {
    return {
      activeIndex: '1',

    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toLogin(){
      this.$router.push('/Login')
    }
  }
}
</script>

<style scoped>

.el-menu-demo {
  min-width: 1100px;
}

.el-menu--horizontal>.el-menu-item {
  border-bottom: none;
}

.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: none;
}
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
</style>
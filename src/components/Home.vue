<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/heima.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="out">退出</el-button>
      </el-header>
    <!-- 头部以下主体部分 -->
    <el-container>
      <!-- 左边侧边栏 -->
      <el-aside width="200px">
        <el-menu
      background-color="#333744"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!-- 一级菜单 -->
      <el-submenu index="1">
      <!-- 一级菜单模板区域 -->
        <template slot="title">
      <!-- 一级菜单 图标区域-->
          <i class="el-icon-location"></i>
      <!-- 一级菜单 内容-->
          <span>导航一</span>
        </template>

        <!-- 二级菜单 -->
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>

      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
      </el-aside>
      <!-- 右边主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    out() {
      window.sessionStorage.clear();
      this.$router.push("login");
    }
  }
};
</script>

<style lang="less" scoped>
.home-container{
  height: 100%;
}
.el-header{
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 19px;
  > div{
    display: flex;
  align-items: center;
  }
  span{
    margin-left: 15px;
  }
}
.el-aside{
  background-color: #333744;
}
.el-main{
  background-color: #eaedf1;
}
</style>
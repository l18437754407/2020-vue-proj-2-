<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/heima.png" alt />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 头部以下主体部分 -->
    <el-container>
      <!-- 左边侧边栏 -->
      <el-aside :width="isCollapse ? '64px':'200px'">
        <!-- 头部折叠区域 -->
        <div class="toggle-button" @click="togleCollapse">|||</div>
        <!-- unique-opened 默认值为false 意思是默认可以同时打开多个一级菜单，手动关闭两种方式: :unique-opened="true"-->
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#0067D7" 
        unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath" >
          <!-- 一级菜单 -->
          <el-submenu :index="item.id +''" v-for="item in menulist" :key="item.id"> 
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <!-- 一级菜单 图标区域-->
              <i :class="iconsObj[item.id]"></i>
              <!-- 一级菜单 内容-->
              <span>{{item.authName}}</span>
            </template>

            <!-- 二级菜单 -->
              <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" 
                :key="subItem.id" @click="saveNavState('/' + subItem.path)">
              <template slot="title">
                <!--  图标区域-->
                <i class="el-icon-menu"></i>
                <!--  内容-->
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右边主体 -->
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      //左侧菜单获取第二步  在生命周期创建一个存放数据的地方
      menulist:[],
      //为一级菜单设置图标，在字体图标库中找出要用的图标做成一个图标对象，利用item.id，放在每次的循环中渲染在页面
      iconsObj:{
        '125':'el-icon-s-custom',
        '103':'el-icon-setting',
        '101':'el-icon-s-goods',
        '102':'el-icon-s-order',
        '145':'el-icon-s-data'
      },
      isCollapse:false,
      //保存链接的激活状态
      activePath:''
    }
  },
  //左侧菜单获取第一步 ：当页面加载的时候同时加载左侧菜单
  created(){
      this.getMenuList()
      //保存链接的激活状态
      this.activePath= window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    //左侧菜单获取第三步 获取左侧菜单数据
    async getMenuList(){
      const {data: res} =await this.$http.get('menus')
      if(res.meta.status !==200) return this.$message.error(res.meta.msg)
      this.menulist=res.data
      console.log(res)
    },
    //点击按钮，切换左侧菜单的显示与隐藏
    togleCollapse(){
        this.isCollapse = !this.isCollapse
    },
    //保存链接的激活状态
    saveNavState(activePath){
      window.sessionStorage.setItem('activePath',activePath)
      this.activePath=activePath
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 19px;
  > div {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 15px;
  }
}
.el-aside {
  background-color: #333744;
  .el-menu{
    border-right: none;  //解决在点开一级菜单式右边突出一像素的效果
  }
}
.el-main {
  background-color: #eaedf1;
}
// <!-- 头部折叠区域 -->
.toggle-button{
background-color: #4a5064;
font-size: 15px;
color: #fff;
line-height: 26px;
text-align: center;
letter-spacing: 0.2em;
cursor: pointer;
}
</style>
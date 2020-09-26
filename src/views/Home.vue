<template>
  <div class="home">
    <!-- 搜索 -->
    <el-row type="flex" class="home-top" justify="space-around">
      <el-col :span="3">
        <div>
          <img src="../assets/9c0866f4-35ed-4cfa-a045-60fcc1ec6641.png" />
        </div>
      </el-col>
      <el-col :span="18">
        <div>
          <el-input placeholder="请输入内容" v-model="input"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <el-dropdown>
            <span class="el-dropdown-link"
              ><i class="el-icon-arrow-down el-icon-plus"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>添加朋友</el-dropdown-item>
              <el-dropdown-item>扫一扫</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
    <!-- 轮播 -->
    <div class="banner">
      <el-carousel trigger="click" indicator-position="none" arrow="none">
        <el-carousel-item class="banner-img1"></el-carousel-item>
        <el-carousel-item class="banner-img2"></el-carousel-item>
        <el-carousel-item class="banner-img3"></el-carousel-item>
        <el-carousel-item class="banner-img4"></el-carousel-item>
      </el-carousel>
    </div>
    <!-- 导航 -->
    <div class="home-nav">
      <el-tabs type="border-card">
        <el-tab-pane label="关注"><Follow /></el-tab-pane>
        <el-tab-pane label="推荐"><Recommend /></el-tab-pane>
        <el-tab-pane label="热门"><Hot /></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Hot from "../components/Hot";
import Follow from "../components/Follow";
import Recommend from "../components/Recommend";
export default {
  data() {
    return {
      input: "",
    };
  },
  components: {
    Follow,
    Recommend,
    Hot,
  },
};
</script>

// 搜索
<style scoped>
.home-top {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
}
.home-top img {
  width: 43px;
  height: 43px;
}
.home-top > .el-col-18 > div {
  position: relative;
}
.home-top > .el-col-18 > div > button {
  right: 0;
  position: absolute;
  font-size: 15px;
  height: 40px;
}
.home-top > .el-col-3 {
  font-size: 25px;
  line-height: 40px;
  color: #409eff;
}
.home-top > .el-col-3 > div {
  height: 40px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-dropdown-link > i {
  font-size: 25px;
}
</style>
// 轮播
<style scoped>
.banner {
  margin-top: 60px;
}
.banner-img1,
.banner-img2,
.banner-img3,
.banner-img4 {
  background-size: cover;
}
.banner-img1 {
  background-image: url("../assets/wallhaven-0pwdw3.jpg");
}
.banner-img2 {
  background-image: url("../assets/wallhaven-n6gzy7.jpg");
}
.banner-img3 {
  background-image: url("../assets/wallhaven-4vd5zm.jpg");
}
.banner-img4 {
  background-image: url("../assets/wallhaven-4o7r25.jpg");
}
</style>
// 导航
<style>
.el-tabs__nav {
  width: 100%;
}
.el-tabs__item {
  width: 33.33%;
}
</style>
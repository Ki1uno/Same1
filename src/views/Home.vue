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
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon-plus"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <a href="/addFriend" class="addFriend">添加朋友</a>
              </el-dropdown-item>
              <el-dropdown-item>扫一扫</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
    <!-- 轮播 -->
    <div class="banner">
      <el-carousel trigger="click" arrow="none">
        <el-carousel-item class="banner-img1">
          <h3>户外跑步 & 精准跑步记录，让你的跑步更加系统</h3>
          <p>
            精准跑步路线记录，跑前热身与跑后拉伸，Keep
            提供更加完善和专业的跑步指导。
          </p>
        </el-carousel-item>
        <el-carousel-item class="banner-img2">
          <h3>运动社区 & 分享健身成果，一起进步</h3>
          <p>
            拍照记录每一天的变化，分享好友相互勉励，在 Same
            健身不再是孤独的坚持。
          </p>
        </el-carousel-item>
        <el-carousel-item class="banner-img3">
          <h3>量体裁衣 & 多种健身训练供你选择</h3>
          <p>
            训练计划针对不同人群、各种器械和阶段健身目标组合编排，适用最广泛的健身场景。
          </p>
        </el-carousel-item>
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
import Follow from "./Follow";
import Hot from "./Hot";
import Recommend from "./Recommend";
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
.home {
  padding-bottom: 35px;
}
.home-top {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;
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
.addFriend {
  color: #555;
  text-decoration: none;
}
</style>
// 轮播
<style scoped>
.banner {
  margin-top: 60px;
}
.banner-img1,
.banner-img2,
.banner-img3 {
  background-size: cover;
}
.banner-img1 {
  background-image: url("../assets/wallhaven-0pwdw3.jpg");
}
.banner-img2 {
  background-image: url("../assets/wallhaven-n6gzy7.jpg");
}
.banner-img3 {
  background-image: url("../assets/wallhaven-4o7r25.jpg");
}
h3,
p {
  color: #fff;
  position: relative;
}
h3 {
  top: 40%;
}
p {
  width: 90%;
  left: 5%;
  right: 5%;
  top: 60%;
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
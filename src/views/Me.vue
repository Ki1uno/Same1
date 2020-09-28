<template>
  <div class="me">
    <!-- 头部 -->
    <el-row type="flex" class="home-top" justify="space-around">
      <el-col :span="3">
        <div>
          <img src="../assets/9c0866f4-35ed-4cfa-a045-60fcc1ec6641.png" />
        </div>
      </el-col>
      <el-col :span="12">
        <div></div>
      </el-col>
      <el-col :span="3">
        <div>
          <el-badge :value="12" class="item" type="primary">
            <a href="#" style="color: #409eff"
              ><i class="el-icon-message"></i
            ></a>
          </el-badge>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <a href="#" style="color: #409eff"
            ><i class="el-icon-full-screen"></i
          ></a>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <a href="#" style="color: #409eff"><i class="el-icon-setting"></i></a>
        </div>
      </el-col>
    </el-row>
    <!-- 头像框 -->
    <el-row type="flex" justify="space-around" style="padding: 0px">
      <el-col :span="24" class="me-bg"
        ><div
          style="
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12),
              0 0 6px rgba(0, 0, 0, 0.04);
          "
        >
          <br />
          <el-avatar
            :size="number"
            icon="el-icon-user-solid"
            style="width: 80px; height: 80px; font-size: 70px"
          >
          </el-avatar>
          <br />
          <br />
          <h3 style="color: #eee">
            Same2020&nbsp;<i class="el-icon-edit"></i>
          </h3>
          <br />
          <br />
        </div>
      </el-col>
    </el-row>
    <!-- 体重 数据 -->
    <el-row
      :gutter="0"
      type="flex"
      justify="space-around"
      style="padding: 0px; text-align: left"
    >
      <el-col
        :span="12"
        style="
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
          background-color: #ffffff;
        "
      >
        <div
          class="grid-content bg-purple"
          style="background-color: #ffffff; padding: 10px"
        >
          <h3>
            今日体重&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
              class="el-icon-arrow-right"
            ></i>
          </h3>
          <br />
          <h5 style="color: #5f6368">体重</h5>
          <span style="font-size: 25px; font-weight: 800">45.2</span
          ><span style="font-size: 15px">KG</span><br />
          <span>为了更健康的身体，建议您增重20kg</span>
        </div>
      </el-col>
      <el-col
        :span="12"
        style="
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
          background-color: #d3dce6;
        "
      >
        <div
          class="grid-content bg-purple-light"
          style="background-color: #ffffff; padding: 10px"
        >
          <h3>
            运动数据&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
              class="el-icon-arrow-right"
            ></i>
          </h3>
          <br />
          <h5 style="color: #5f6368">本周运动</h5>
          <span style="font-size: 25px; font-weight: 800">2460</span
          ><span style="font-size: 15px">分钟</span><br />
          <span>每天坚持运动有助于保持高水平的健康状态</span>
        </div>
      </el-col>
    </el-row>
    <!-- 个人功能管理 -->
    <div
      style=" box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
color:#5F6368;"
      class="me-function"
    >
      <el-row type="flex" class="me-menu" justify="space-around">
        <el-col :span="6">
          <div>
            <a href="#">
              <img src="../assets/计划.png" style="height: 35px" /><br />
              <span style="color: #333">今日计划</span>
            </a>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <a href="#">
              <img src="../assets/课程.png" style="height: 35px" /><br />
              <span style="color: #333">我的课程</span>
            </a>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <a href="#">
              <img src="../assets/奖章 .png" style="height: 35px" /><br />
              <span style="color: #333">我的勋章</span>
            </a>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <a href="#">
              <img src="../assets/包裹.png" style="height: 35px" /><br />
              <span style="color: #333">待收商品</span>
            </a>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="me-menu" justify="space-around">
        <el-col :span="6">
          <div>
            <a href="#">
              <img src="../assets/报告.png" style="height: 35px" /><br />
              <span style="color: #333">身体报告</span>
            </a>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <a href="#">
              <img src="../assets/目标.png" style="height: 35px" /><br />
              <span style="color: #333">我的目标</span>
            </a>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <a href="#">
              <img src="../assets/医生.png" style="height: 35px" /><br />
              <span style="color: #333">私人医生</span>
            </a>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <a href="#">
              <img src="../assets/蔬菜.png" style="height: 35px" /><br />
              <span style="color: #333">健康食谱</span>
            </a>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="me-menu" justify="space-around">
        <el-col :span="6">
          <div>
            <a href="#">
              <img src="../assets/线下.png" style="height: 35px" /><br />
              <span style="color: #333">线下活动</span>
            </a>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <a href="#">
              <img src="../assets/硬件实力.png" style="height: 35px" /><br />
              <span style="color: #333">硬件外联</span>
            </a>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <a href="#">
              <img src="../assets/活动.png" style="height: 35px" /><br />
              <span style="color: #333">我的活动</span>
            </a>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <a href="#">
              <img src="../assets/联系我们.png" style="height: 35px" /><br />
              <span style="color: #333">联系我们</span>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 绿色出行 -->
    <el-row style="background-color: #17be74">
      <el-col :span="24"
        ><div
          class="grid-content bg-purple-dark"
          style="background-color: #17be74; padding: 25px"
        >
          <h1 style="color: white">Same绿色出行</h1>
          <img src="../assets/绿色 叶子 节能.png" style="height: 100px" />
          <h4 style="color: white">您已累计步行189625，减少地球碳排放3150g</h4>
          <br />
          <br /></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      radio: "1",
    };
  },
};
</script>
<style>
/* 顶部 */
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
/* 头像框 */
.el-avatar {
  width: 80px;
  height: 80px;
}
.el-avatar--icon {
  font-size: 70px;
}
#touxiang {
  text-align: left;
}
.el-row {
  margin-bottom: 0px;
  margin-top: 0px;
}
.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.me-menu {
  padding: 10px 0;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) */
}
.me-menu a {
  text-decoration: none;
  color: black;
}
</style>
<style scoped>
.me-bg {
  background-image: url("../assets/wallhaven-qdk1xd.jpg");
  background-size: cover;
}
.me-function {
  position: relative;
  left: 2%;
  width: 96%;
  margin: 5px 0 5px;
}
</style>
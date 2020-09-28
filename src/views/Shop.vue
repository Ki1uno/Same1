<template>
  <div class="shop">
    <!-- 商城顶部搜索 -->
    <el-row
      type="flex"
      class="shop-top"
      justify="space-around"
      style="padding: 0px"
    >
      <el-col :span="3" style="margin-top: 15px">
        <div>
          <i class="el-icon-full-screen"></i>
        </div>
      </el-col>
      <el-col :span="16">
        <div>
          <el-input
            placeholder="SAME商城"
            v-model="input"
            clearable
            style="margin-top: 15px"
          >
          </el-input>
        </div>
      </el-col>
      <el-col :span="2" style="margin-top: 15px">
        <div>
          <a href="" style="color: #409eff"><i class="el-icon-search"></i></a>
        </div>
      </el-col>
      <el-col :span="3" style="margin-top: 15px">
        <div>
          <i class="el-icon-shopping-cart-1"></i>
        </div>
      </el-col>
    </el-row>
    <!-- 商城大分类 -->
    <el-row class="shop-fenlei" style="margin-top: 10px">
      <el-col :span="6">
        <div>
          <el-tag>商城自营</el-tag>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-tag type="success">运动器材</el-tag>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-tag type="warning">营养美食</el-tag>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-tag type="danger">课程同款</el-tag>
        </div>
      </el-col>
    </el-row>

    <!-- 轮播图 -->
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
    <!-- 商城细分 -->
    <el-row type="flex" class="shop-menu" justify="space-around">
      <el-col :span="6">
        <div>
          <a href="#">
            <img src="../assets/运动2.png" style="height: 35px" /><br />
            <span>户外运动</span>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <a href="#">
            <img src="../assets/康复训练.png" style="height: 35px" /><br />
            <span>康复器械</span>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <a href="#">
            <img src="../assets/孕妇.png" style="height: 35px" /><br />
            <span>宝妈专区</span>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <a href="#">
            <img src="../assets/婴儿.png" style="height: 35px" /><br />
            <span>婴幼儿专区</span>
          </a>
        </div>
      </el-col>
    </el-row>
    <!-- 商城细分第二行 -->
    <el-row type="flex" class="shop-menu" justify="space-around">
      <el-col :span="6">
        <div>
          <a href="#">
            <img src="../assets/青年节.png" style="height: 30px" /><br />
            <span>青少年专区</span>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <a href="#">
            <img src="../assets/playball.png" style="height: 30px" /><br />
            <span>运动器械</span>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <a href="#">
            <img src="../assets/运动裤.png" style="height: 30px" /><br />
            <span>运动服饰</span>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <a href="#">
            <img src="../assets/teachknolege.png" style="height: 30px" /><br />
            <span>科技健身</span>
          </a>
        </div>
      </el-col>
    </el-row>
    <!-- 限时活动 -->
    <el-row :gutter="5" style="margin-bottom: 0px">
      <el-col :span="12" :push="0" style="margin-bottom: 0px">
        <div
          class="grid-content bg-purple"
          style="margin-bottom: 0px; background-color: #ad0707"
        >
          <h2 style="color: #ffdc00">限时秒杀</h2>
          <span style="color: #e5e9f2">{{
            hour
              ? hourString + ":" + minuteString + ":" + secondString
              : minuteString + ":" + secondString
          }}</span>
          <br />
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span style="color: #ffffff">低脂汉堡</span>
          </div>
        </div>
      </el-col>

      <el-col :span="12" :push="0">
        <div class="grid-content bg-purple" style="background-color: #ffdc00">
          <h2 style="color: #ad0707">团购优惠</h2>
          <span style="color: #ffffff">{{
            hour
              ? hourString + ":" + minuteString + ":" + secondString
              : minuteString + ":" + secondString
          }}</span>
          <br />
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span style="color: #ffffff">低脂汉堡</span>
          </div>
        </div></el-col
      >
    </el-row>
    <!-- 达人推荐榜 -->
    <div
      id="hot-nav"
      class="grid-content bg-purple-dark"
      style="background-color: #ff4000"
    >
      <h2 style="color: white">达人推荐榜</h2>
    </div>
    <!-- 商品栏 -->
    <el-row :gutter="10">
      <el-col :span="6" :push="0">
        <div class="grid-content bg-purple" style="background-color: #f0f9eb">
          <img
            src="../assets/wallhaven-4lpdz2.jpg"
            style="height: 100px; width: 75px"
          />
          <br />
          <span style="color: black">运动耳机</span>
          <span style="color: black">￥256</span>
        </div>
      </el-col>
      <el-col :span="6" :push="0">
        <div class="grid-content bg-purple" style="background-color: #ecf5ff">
          <img
            src="../assets/wallhaven-4lpdz2.jpg"
            style="height: 100px; width: 75px"
          />
          <br />
          <span style="color: black">运动耳机</span>
          <span style="color: black">￥256</span>
          <br /></div
      ></el-col>
      <el-col :span="6" :push="0">
        <div class="grid-content bg-purple" style="background-color: #d3dce6">
          <img
            src="../assets/wallhaven-4lpdz2.jpg"
            style="height: 100px; width: 75px"
          />
          <br />
          <span style="color: black">运动耳机</span>
          <span style="color: black">￥256</span>
          <br /></div
      ></el-col>
      <el-col :span="6" :push="0">
        <div class="grid-content bg-purple" style="background-color: #99a9bf">
          <img
            src="../assets/wallhaven-4lpdz2.jpg"
            style="height: 100px; width: 75px"
          />
          <br />
          <span style="color: black">运动耳机</span>
          <span style="color: black">￥256</span>
          <br /></div
      ></el-col>
    </el-row>

    <!-- 购物篮 -->
    <el-row>
      <el-col :xs="12" :sm="8" :md="6" v-for="o in 20" :key="o">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>低脂汉堡</span>
            <div class="bottom clearfix">
              <span style="color: red; font-size: 20px">￥25&nbsp;</span>
              <span style="font-size: 12px">已有75人购买</span>
              <el-button type="text" class="button">
                <i class="el-icon-circle-plus-outline"></i>
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Date",
  data() {
    return {
      input: "",
      hour: "",
      minute: "",
      second: "",
      promiseTimer: "",
    };
  },
  props: {
    remainTime: {
      // 倒计时间总秒数
      default: "30000000000",
    },
  },
  mounted() {
    if (this.remainTime > 0) {
      this.hour = Math.floor((this.remainTime / 3600) % 24);
      this.minute = Math.floor((this.remainTime / 60) % 60);
      this.second = Math.floor(this.remainTime % 60);
      this.countDowm();
    }
  },
  methods: {
    countDowm() {
      var self = this;
      clearInterval(this.promiseTimer);
      this.promiseTimer = setInterval(function () {
        if (self.hour === 0) {
          if (self.minute !== 0 && self.second === 0) {
            self.second = 59;
            self.minute -= 1;
          } else if (self.minute === 0 && self.second === 0) {
            self.second = 0;
            self.$emit("countDowmEnd", true);
            clearInterval(self.promiseTimer);
          } else {
            self.second -= 1;
          }
        } else {
          if (self.minute !== 0 && self.second === 0) {
            self.second = 59;
            self.minute -= 1;
          } else if (self.minute === 0 && self.second === 0) {
            self.hour -= 1;
            self.minute = 59;
            self.second = 59;
          } else {
            self.second -= 1;
          }
        }
      }, 1000);
    },
    formatNum(num) {
      return num < 10 ? "0" + num : "" + num;
    },
  },
  computed: {
    hourString() {
      return this.formatNum(this.hour);
    },
    minuteString() {
      return this.formatNum(this.minute);
    },
    secondString() {
      return this.formatNum(this.second);
    },
  },
};
</script>

<style scoped>
.shop{
    padding-bottom: 35px;
}
.banner {
  margin-top: 0px;
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
.shop-top {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}
.shop-menu {
  padding: 10px 0;
}
.shop-top > .el-col-4 {
  font-size: 25px;
  line-height: 40px;
  color: #409eff;
}
.shop-top > .el-col-2 {
  font-size: 25px;
  line-height: 40px;
  color: #409eff;
}
.shop-top > .el-col-3 {
  font-size: 25px;
  line-height: 40px;
  color: #409eff;
}
.shop-fenlei {
  background-color: white;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 170px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
a {
  text-decoration: none;
  color: black;
}
.el-row {
  margin-bottom: 0px;
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
img {
  height: 150px;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}
.el-col {
  margin-bottom: 20px;
  padding: 0 10px;
}
i {
  font-size: 20px;
  position: relative;
  bottom: 5px;
}
#hot-nav {
  height: 100px;
  width: 100%;
  margin-top: 0;
  line-height: 100px;
  margin-bottom: 20px;
}
</style>
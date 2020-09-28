<template>
  <div class="plan">
    <!-- 标题 -->
    <div class="plan-title">
      <div class="plan-title1">
        <h1>训练计划</h1>
        <h3>高效达成训练目标</h3>
      </div>
      <div class="plan-title2">
        <li>多种训练计划</li>
        <li>饮食记录与分析 <el-tag type="success">new</el-tag></li>
      </div>
    </div>
    <!-- 内容 -->
    <div class="plan-content">
      <el-row>
        <el-col :xs="20" :sm="20" :offset="2">
          <el-card class="plan-me">
            <div style="padding: 50px 14px 0">
              <p>我的今日计划</p>
              <p>3周 ▪ 每周7天 ▪ 每天30~40分钟</p>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="20" :sm="20" :offset="2" v-for="i in 20" :key="i">
          <el-card>
            <div style="padding: 50px 14px 0">
              <p>选择个人专属计划{{ i }}</p>
              <p>4周 ▪ 进阶</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>
// 标题
<style scoped>
.plan-title {
  padding-top: 15px;
  padding-left: 25px;
  text-align: left;
  height: 200px;
  background-image: linear-gradient(#409EFF, #fff);
}
.plan-title1 {
  margin-bottom: 15px;
}
.plan-title1 > h1,
.plan-title1 > h3 {
  color: #555;
}
.plan-title2 > li {
  font-size: 13px;
  color: #555;
}
.plan-title2 > li > span {
  padding: 0px;
  height: 15px;
  line-height: 15px;
}
</style>
// 内容
<style scoped>
.plan-content {
  position: relative;
  bottom: 60px;
  margin-bottom: -35px;
}
.el-col {
  margin-bottom: 25px;
}
.el-card {
  height: 150px;
  background-image: url("../assets/wallhaven-0jk66y.jpg");
  background-size: cover;
}
.plan-me {
  background-image: url("../assets/wallhaven-4v2mv8.jpg");
}
.el-card p {
  color: #eee;
}
.el-card p:last-of-type {
  font-size: 12px;
}
</style>
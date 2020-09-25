<template>
  <div class="footer">
    <el-row>
      <el-col :span="6">
        <div>
          <a href="/">
            <i class="el-icon-s-home"></i>
            <p>首页</p>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <a href="/plan">
            <i class="el-icon-star-on"></i>
            <p>计划</p>
          </a>
        </div> </el-col
      ><el-col :span="6">
        <div>
          <a href="/shop">
            <i class="el-icon-s-goods"></i>
            <p>商城</p>
          </a>
        </div> </el-col
      ><el-col :span="6">
        <div>
          <a href="/me">
            <i class="el-icon-user-solid"></i>
            <p>我的</p>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
a {
  text-decoration: none;
  color: #000;
}
i {
  position: relative;
  bottom: 10px;
  font-size: 35px;
}
p {
  margin-bottom: 10px;
}
</style>
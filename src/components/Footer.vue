<template>
  <div class="footer">
    <el-row>
      <el-col :span="6">
        <div @click="clickItem('/')" :class="{ active: $route.path === '/' }">
          <i class="el-icon-s-home"></i>
          <p>首页</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div
          @click="clickItem('/plan')"
          :class="{ active: $route.path === '/plan' }"
        >
          <i class="el-icon-star-on"></i>
          <p>计划</p>
        </div> </el-col
      ><el-col :span="6">
        <div
          @click="clickItem('/shop')"
          :class="{ active: $route.path === '/shop' }"
        >
          <i class="el-icon-s-goods"></i>
          <p>商城</p>
        </div> </el-col
      ><el-col :span="6">
        <div
          @click="clickItem('/me')"
          :class="{ active: $route.path === '/me' }"
        >
          <i class="el-icon-user-solid"></i>
          <p>我的</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    clickItem: function (path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
i {
  font-size: 30px;
  position: relative;
  bottom: 10px;
}
p {
  position: relative;
  bottom: 5px;
}
.active {
  color: #409eff;
}
</style>
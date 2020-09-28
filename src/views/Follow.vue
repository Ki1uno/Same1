<template>
  <div class="follow">
    <el-col :xs="12" :sm="8" :md="6" v-for="o in 20" :key="o">
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <span>11111111111111</span>
            <el-button type="text" class="button">
              <i class="el-icon-star-off"></i>
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.follow {
  position: relative;
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
</style>
<template>
  <div class="home">
    <!-- 顶部搜索 -->
    <el-row type="flex" class="home-top" justify="space-around">
      <el-col :span="3">
        <div>
          <i class="el-icon-toilet-paper"></i>
        </div>
      </el-col>
      <el-col :span="18">
        <div>
          <el-input placeholder="请输入内容" v-model="input" clearable>
          </el-input>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <i class="el-icon-full-screen"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style scoped>
.home-top {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}
.home-top > .el-col-3 {
  font-size: 25px;
  line-height: 40px;
  color: #409eff;
}
</style>
<template>
  <div class="addFriend">
    <el-col :span="16">
      <div>
        <el-input placeholder="手机号/账号" v-model="input"></el-input>
        <el-button type="primary" icon="el-icon-search"></el-button>
      </div>
    </el-col>
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
.el-col-16 {
  position: relative;
  left: 17%;
  top: 100px;
}
.el-col-16 > div > button {
  right: 0;
  position: absolute;
  font-size: 15px;
  height: 40px;
}
</style>
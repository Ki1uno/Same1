<template>
  <div class="shop">
   <!-- 商城顶部搜索 -->
   <el-row type="flex" class="shop-top" justify="space-around">
      <el-col :span="3">
        <div>
          <i class="el-icon-full-screen"></i>
        </div>
      </el-col>
      <el-col :span="16">
        <div>
          <el-input placeholder="SAME商城" v-model="input" clearable>
            <i class="el-icon-shopping-cart-1"></i>
          </el-input>
        </div>
      </el-col>
      <el-col :span="2">
        <div>
         <a href="" style="color:#409eff;"><i class="el-icon-search"></i></a>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <i class="el-icon-shopping-cart-1"></i>
        </div>
      </el-col>
    </el-row>
    <!-- 商城大分类 -->
    <el-row class="shop-fenlei" style="margin-top:10px;">
 <el-col :span="6">
        <div>
        <el-tag >商城自营</el-tag>
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
      <el-carousel trigger="click">
        <el-carousel-item>
          <el-image
            :src="require('../assets/婴儿.png')"
            :fit="contain"
          ></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image
            :src="require('../assets/婴儿.png')"
            :fit="contain"
          ></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image
            :src="require('../assets/婴儿.png')"
            :fit="contain"
          ></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image
            :src="require('../assets/婴儿.png')"
            :fit="contain"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  <!-- 商城细分 -->
   <el-row type="flex" class="shop-menu" justify="space-around">
      <el-col :span="6">
        <div>
          <a href="#"> 
            <img src="../assets/运动2.png" style="height:35px;"><br>
            <span>户外运动</span>
            </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <a href="#">
            <img src="../assets/康复训练.png" style="height:35px;"><br>
            <span>康复器械</span>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
         <a href="#">
            <img src="../assets/孕妇.png" style="height:35px;"><br>
           <span>宝妈专区</span>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
           <a href="#">
            <img src="../assets/婴儿.png" style="height:35px;"><br>
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
            <img src="../assets/青年节.png" style="height:30px;"><br>
            <span>青少年专区</span>
            </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <a href="#">
            <img src="../assets/playball.png" style="height:30px;"><br>
            <span>运动器械</span>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
         <a href="#">
            <img src="../assets/运动裤.png" style="height:30px;"><br>
           <span>运动服饰</span>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
           <a href="#">
            <img src="../assets/teachknolege.png" style="height:30px;"><br>
            <span>科技健身</span>
          </a>
        </div>
      </el-col>
    </el-row>
    <!-- 限时活动 -->
    <el-row>
  <el-col :span="12">
    <div class="grid-content bg-purple">
      <h2 style="color:#FFDC00;">限时秒杀</h2>
      <span style="color:#E5E9F2;">{{hour? hourString+':'+minuteString+':'+secondString : minuteString+':'+secondString}}</span>
      <br>
      <img src="../assets/wallhaven-nko5v1.jpg" style="height:100px">
      <br>
      <span style="color:#E5E9F2;">优选三文鱼-低至5折</span>
      <br>
      <img src="../assets/wallhaven-2k3go6.jpg" style="height:100px">
      <br>
      <span style="color:#E5E9F2;">全麦面包-低脂高饱腹感</span>
    </div>
    </el-col>
  
  <el-col :span="12"><div class="grid-content bg-purple-light">
    
    </div></el-col>
</el-row>
  </div>
</template>

<script>
export default {
  name: 'Date',
   data() {
      return {
        input: '',
       hour: '',
        minute: '',
        second: '',
        promiseTimer: ''
      }
    },
     props: {
      remainTime: {    // 倒计时间总秒数
        default: '30000000000'
      }
    },
    mounted () {
      if (this.remainTime > 0) {
        this.hour = Math.floor((this.remainTime / 3600) % 24)
        this.minute = Math.floor((this.remainTime / 60) % 60)
        this.second = Math.floor(this.remainTime % 60)
        this.countDowm()
      }
    },
   methods: {
     countDowm () {
        var self = this
        clearInterval(this.promiseTimer)
        this.promiseTimer = setInterval(function () {
          if (self.hour === 0) {
            if (self.minute !== 0 && self.second === 0) {
              self.second = 59
              self.minute -= 1
            } else if (self.minute === 0 && self.second === 0) {
              self.second = 0
              self.$emit('countDowmEnd', true)
              clearInterval(self.promiseTimer)
            } else {
              self.second -= 1
            }
          } else {
            if (self.minute !== 0 && self.second === 0) {
              self.second = 59
              self.minute -= 1
            } else if (self.minute === 0 && self.second === 0) {
              self.hour -= 1
              self.minute = 59
              self.second = 59
            } else {
              self.second -= 1
            }
          }
        }, 1000)
      },
      formatNum (num) {
        return num < 10 ? '0' + num : '' + num
      }
    },
    computed: {
      hourString () {
        return this.formatNum(this.hour)
      },
      minuteString () {
        return this.formatNum(this.minute)
      },
      secondString () {
        return this.formatNum(this.second)
      }
  },
};
</script>

<style scoped>
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
.shop-fenlei{
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
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  a{
    text-decoration: none;
    color: black;
  }
  .el-row {
    margin-bottom: 20px;
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
</style>
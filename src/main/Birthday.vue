<template>
  <div><p>~~欢迎来到美女养成记频道~~</p></div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,i) in images" :key="i"><img :src="item"/></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Swiper from 'swiper';   // 引入库
import 'swiper/css/swiper.css'; // 引入样式文件，注意5和6版本的样式文件不一致

export default {
  name: 'birthdayWQ',
  setup() {
    onMounted(() => {
      new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: {delay: 2000},
        pagination: {
          el: '.swiper-pagination',
        },
      });
    })
  },
  data() {
    return {
      images : [
        require('@/assets/1.jpg'),
        require('@/assets/2.jpg'),
        require('@/assets/3.jpg')
      ]
    };
  }
};
</script>
<style>
.swiper-container {
  width: 100%;
  height: 50%;
  border-radius: 10px;
}
.swiper-slide {
    width: 100% !important;
}
img {
      width: 80%;
      height: 100%;
      object-fit: cover;
    }
</style>

<template>
  <div class="birthday">
    <div class="scroll-text">
      <p>~~生日快乐~~</p>
      <br/>
      <p>今天是斯琴的生日哇，愿世间美好与你环环相扣</p>
    </div>
  </div>
  <div class="imgs">

  </div>
  <img src="~@/assets/four.jpg" width="80%" height="70%"/>
</template>

<script>
export default {
  name: 'BirthdayByW'
}
</script>

<style scoped>
.birthday {
  text-align: center;
  padding: 20px;
}

.imgs {
  background-image: url('~@/assets/logo.png');
  width: 80%;
  height: 70%;
}

.scroll-text {
  overflow: hidden;
  white-space: nowrap;
  position:relative;
  width: 100%;
  height: 90px;
  font-size: 20px;
  border: 1px solid #000;
}

.scroll-text p {
  position: absolute;
  width: 100%;
  animation: scroll 10s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(80%);
  }
  100% {
    transform: translateX(-80%);
  }
}
</style>

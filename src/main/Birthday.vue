<template>
  <div class="birthday">
    <div class="scroll-text">
      <p>生日快乐！</p>
      <br/>
      <p>今天是你的生日，愿你在新的一岁里万事如意，心想事成！</p>
    </div>
  </div>
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

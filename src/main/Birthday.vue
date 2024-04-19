<template>
  <div class="birthday">
    <div class="scroll-text">
      <p>~~生日快乐~~</p>
      <br/>
      <p>愿世间美好与你环环相扣</p>
    </div>
  </div>
  <div>
    {{ productList }}
  </div>
  <!-- <img src="~@/assets/logo.png" width="80%" height="70%"/> -->
</template>

<script>
//import axios from 'axios'
import fetch from 'node-fetch'

// const instance = axios.create({
//   baseURL: 'http://localhost:15008',
//   timeout: 5000,
// });
export default {
  name: 'BirthdayByW',
  data() {
    return {
      productList: []
    }
  },
  mounted() {
    this.test()
  },

  methods: {
    test() {
        const data = JSON.stringify({
          "canteenId": 98
        });
        fetch('http://localhost:15008/internal/frontBoard/signProduct', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: data
          //mode: 'no-cors' //导致content-type只能传text/plain
        })
        .then(response => response.json())
        .then(res => {
                  this.productList = res;
        });
        // axios.post('http://localhost:15008/internal/frontBoard/signProduct', data, {
        // headers: {
        //   "Content-Type": "application/json"
        // },
        // //proxy: cors()
        // }).then(res => {
        //   this.productList = res.data;
        // });
    }
  }
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

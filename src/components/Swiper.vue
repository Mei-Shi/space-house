<template>
  <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#5c9259">
    <van-swipe-item v-for="(item, index) in list" :key="index">
      <img :src="item.carouselUrl" alt="" @click="goTo(item.redirectUrl)" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    list: {
      type: Array,
      default: null,
    },
  },
  methods: {
    // 打开链接的方法
    goTo(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
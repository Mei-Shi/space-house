<template>
  <header class="simple-header">
    <i class="spicon spicon-arrow-left-bold" @click="goBack"></i>
    <div class="simple-header-title">{{ name }}</div>
    <i class="spicon spicon-gengduo"></i>
  </header>
</template>

<script>
export default {
  name: "SimpleHeader",
  // 外部传入的 title 属性，可以定义类型和默认值
  props: {
    name: {
      type: String,
      default: "",
    },
    back: {
      type: String,
      default: "",
    },
  },
  methods: {
    // 点击头部组件右侧返回按钮，让路由往回切一页
    goBack() {
      if (!this.back) {
        this.$router.go(-1);
      } else {
        this.$router.push({ path: this.back });
      }
      this.$emit("callback");
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/common/style/mixin";
.simple-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  .fj();
  .wh(100%, 44px);
  line-height: 44px;
  padding: 0 10px;
  .boxSizing();
  color: #252525;
  background: #fff;
  border-bottom: 1px solid #dcdcdc;
  .simple-header-title {
    font-size: 14px;
  }
  i {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }
}
</style>
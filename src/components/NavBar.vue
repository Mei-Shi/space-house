<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <router-link tag="li" class="nav-list-item active" to="home">
        <i class="spicon spicon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="category">
        <i class="spiocn spicon-sort"></i>
        <span>分类</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="cart">
        <van-icon
          class="spiocn spicon-gouwuche"
          :info="!count ? '' : count"
        ></van-icon>
        <span>购物车</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="user">
        <i class="spiocn spicon-wode"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { getLocal } from "@/common/js/utils";
export default {
  name:'NavBar',
  mounted() {
    const token = getLocal;
    const path = this.$router.path;
    if (token && path != "/home") {
      this.$store.dispatch("updateCart");
    }
  },
  computed: {
    count() {
      return this.$store.state.cartCount;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";
.nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  z-index: 1000;
  background: #fff;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  .nav-list {
    width: 100%;
    .fj();
    flex-direction: row;
    padding: 0;
    .nav-list-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      color: #666;
      &.router-link-active {
        color: @primary;
      }
      i {
        text-align: center;
        font-family: "iconfont" !important;
        font-size: 22px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
      }
      span {
        font-size: 12px;
      }
      .spicon-gouwuche {
        margin: 0 auto;
        margin-bottom: 2px;
      }
    }
  }
}
</style>
<template>
  <div class="login">
    <s-Header
      :name="type == 'login' ? '登录' : '注册'"
      :back="'/home'"
    ></s-Header>
    <img class="logo" src="../assets/space.png" alt="" />
    <div class="login-body login" v-if="type == 'login'">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        ></van-field>
        <van-field
          v-model="password"
          name="password"
          label="密码"
          placeholder="密码"
          type="password"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="verify">
          <Verify
            ref="loginVerifyRef"
            :barSize="{ width: '75%', height: '40px' }"
            :type="3"
            @error="error"
            :showButton="false"
            @success="success"
          ></Verify>
        </div>
        <div style="margin: 16px">
          <div class="link-register" @click="toggle('register')">立即注册</div>

          <van-button
            round
            block
            type="info"
            color="#5c9259"
            native-type="submit"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
    <div v-else class="login-body register">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username1"
          name="username1"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password1"
          name="password1"
          label="密码"
          placeholder="密码"
          type="password"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="verify">
          <Verify
            ref="loginVerifyRef"
            @error="error"
            :showButton="false"
            @success="success"
            :type="3"
            :barSize="{ width: '75%', height: '40px' }"
          ></Verify>
        </div>
        <div style="margin: 16px">
          <div class="link-login" @click="toggle('login')">已有登录账号</div>
          <van-button
            round
            block
            type="info"
            color="#5c9259"
            native-type="submit"
            >注册</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import Verify from "vue2-verify";
import sHeader from "@/components/SimpleHeader";
import { getLocal, setLocal } from "@/common/js/utils";
import { login, register } from "@/service/user";
export default {
  data() {
    return {
      username: "",
      password: "",
      username1: "",
      password1: "",
      type: "login",
      verify: false,
    };
  },
  components: {
    Verify,
    sHeader,
  },
  methods: {
    reFreshVerify() {
      this.$refs.loginVerifyRef.$refs.refresh();
    },
    // 提交登录或注册表单
    async onSubmit(values) {
      if (!this.verify) {
        Toast.fail("请完成验证");
        return;
      }
      if (this.type == "login") {
        const { data, resultCode } = await login({
          loginName: values.username,
          passwordMd5: this.$md5(values.password),
        });
        setLocal("token", data);
        // 需要刷新页面，否则 axios.js 文件里的 token 不会被重置
        window.location.href = "/";
      } else {
        const { data } = await register({
          loginName: values.username1,
          password: values.password1,
        });
        Toast.success("注册成功");
        this.type = "login";
      }
    },
    //切换登录和注册两种方式
    toggle(v) {
      this.verify = false;
      this.type = v;
    },
    success(obj) {
      this.verify = true;
      // 回调之后，刷新验证码
      obj.end();
    },
    error(obj) {
      this.verify = false;
      // 回调之后，刷新验证码
      obj.refresh();
    },
  },
};
</script>

<style lang="less" >
.login {
  .logo {
    width: 250px;
    height: 100px;
    display: block;
    margin: 80px auto 30px;
  }
  .login-body {
    padding: 0 20px;
  }
  .login {
    .link-register {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
  .register {
    .link-login {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }

  .verify {
    margin-left: 15px;
    margin-top: 10px;
    width: 250px;
    height: 45px;
  }
}
</style>
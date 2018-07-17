<template>
  <div class="login-wrapper">
    <group>
      <x-input v-model="username" title="姓名" name="username" placeholder="请输入姓名"></x-input>
    </group>
    <group>
      <x-input v-model="phone" title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number"></x-input>
    </group>
    <x-button class="submit-btn" type="default" @click.native="login">登录</x-button>
    <!-- <router-link :to="{name: 'index'}">login</router-link> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { XInput, Group, XButton } from "vux";
import { validate } from "../assets/js/validate";
import api from "./../http/apiPath";
export default {
  components: {
    XInput,
    Group,
    XButton
  },
  data() {
    return {
      username: "",
      phone: ""
    };
  },
  methods: {
    // 点击登录
    login() {
      let _this = this;
      if (validate.isEmpty(this.username)) {
        this.$vux.toast.show({
          text: "姓名不能为空！",
          type: "cancel"
        });
        return false;
      } else if (validate.isEmpty(this.phone)) {
        this.$vux.toast.show({
          text: "手机号码不能为空！",
          type: "cancel"
        });
        return false;
      } else if (!validate.checkPhone(this.phone)) {
        this.$vux.toast.show({
          text: "请输入正确的手机号码！",
          type: "cancel"
        });
        return false;
      }

      this.$vux.loading.show({
        text: "正在登录"
      });
      this.$http.post(api.loginApi).then(({ data }) => {
        if (data.code == 200 && data.msg == "success") {
          // 登录成功
          _this.$vux.loading.hide();
          localStorage.setItem("isLogin", true);
          localStorage.setItem("userData", JSON.stringify({ phone: this.phone, username: this.username }));
          _this.$router.push({
            name: "index"
          });
          return false;
        } else {
          // 登录失败
          _this.$vux.loading.hide();
          _this.$vux.toast.show({
            text: data.msg,
            type: "warn"
          });
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less">
.login-wrapper {
  .submit-btn {
    margin-top: 15px;
  }
}
</style>


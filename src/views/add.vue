<template>
  <div class="add-wrapper">
    <group>
      <x-input title="标题" v-model="title"></x-input>
      <x-input title="链接" v-model="link"></x-input>
      <calendar style="@calendar-arrow-color:'#e75581'" v-model="date" title="时间" disable-future></calendar>
    </group>
    <x-button class="submit-btn" type="default" @click.native="add">确定</x-button>
    <Tab type="add"></Tab>
  </div>
</template>

<script>
import { Group, Calendar, XInput, XButton } from "vux";
import { validate } from "../assets/js/validate";
import api from "./../http/apiPath";
import Tab from '../components/tab'

export default {
  components: {
    Calendar,
    Group,
    XInput,
    XButton,
    Tab,
  },
  data() {
    return {
      title: '',
      link: '',
      date: "TODAY"
    };
  },
  methods: {
    add() {
      let _this = this;
      if (validate.isEmpty(this.title)) {
        this.$vux.toast.show({
          text: "标题不能为空！",
          type: "cancel"
        });
        return false;
      } else if (validate.isEmpty(this.link)) {
        this.$vux.toast.show({
          text: "链接不能为空！",
          type: "cancel"
        });
        return false;
      } 
      this.$http.post(api.addBlogApi).then(({ data }) => {
        if (data.code == 200 && data.msg == "success") {
          _this.$router.push({
            name: "index"
          });
          return false;
        } else {
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
.add-wrapper {
  .submit-btn {
    margin-top: 15px;
  }
}
</style>

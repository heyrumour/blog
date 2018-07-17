<template>
  <div class="tab-wrapper">
    <tab active-color="#e75581" v-if="type == 'index'">
      <tab-item selected @on-item-click="onItemClick('index')">首页</tab-item>
      <!-- <tab-item @on-item-click="onItemClick">+</tab-item> -->
      <tab-item @on-item-click="onItemClick('person')">我的</tab-item>
    </tab>
    <tab active-color="#e75581" v-else>
      <tab-item @on-item-click="onItemClick('index')">首页</tab-item>
      <!-- <tab-item @on-item-click="onItemClick">+</tab-item> -->
      <tab-item selected @on-item-click="onItemClick('person')">我的</tab-item>
    </tab>
  </div>
</template>

<script>
import { Tab, TabItem } from "vux";
export default {
  props: {
    type: String
  },
  components: {
    Tab,
    TabItem
  },
  data() {
    return {};
  },
  methods: {
    onItemClick(index) {
      this.$router.push({
        name: index
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/center.less";
.tab-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #D9D9D9;
}
.box {
  padding: 15px;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
</style>
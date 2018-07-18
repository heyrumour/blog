<template>
  <div class="tab-wrapper">
    <tab active-color="#e75581" :line-width="0" v-if="type == 'index'">
      <tab-item selected @on-item-click="onItemClick('index')">首页</tab-item>
      <tab-item class="new-wrapper" @on-item-click="onNewClick()">
        <x-icon class="icon-new" type="ios-plus-empty" size="30"></x-icon>
      </tab-item>
      <tab-item @on-item-click="onItemClick('person')">我的</tab-item>
    </tab>
    <tab active-color="#e75581" :line-width="0" v-else-if="type == 'person'">
      <tab-item @on-item-click="onItemClick('index')">首页</tab-item>
      <tab-item class="new-wrapper" @on-item-click="onNewClick()">
        <x-icon class="icon-new" type="ios-plus-empty" size="30"></x-icon>
      </tab-item>
      <tab-item selected @on-item-click="onItemClick('person')">我的</tab-item>
    </tab>
    <tab active-color="#e75581" :line-width="0" v-else>
      <tab-item @on-item-click="onItemClick('index')">首页</tab-item>
      <tab-item @on-item-click="onItemClick('person')">我的</tab-item>
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
    return {
      getBarWidth: function(index) {
        return (index + 1) * 22 + "px";
      }
    };
  },
  methods: {
    onItemClick(index) {
      this.$router.push({
        name: index
      });
    },
    onNewClick() {
       this.$router.push({
        name: 'add'
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
  border-top: 1px solid #d9d9d9;
}
.box {
  padding: 15px;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
.new-wrapper {
  position: relative;
  .icon-new {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
<template>
  <div class="person-wrapper">
    <group>
      <cell title="用户名" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ username }}</span>
        </div>
      </cell>
      <cell title="手机号码" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ phone }}</span>
        </div>
      </cell>
      <router-link to="index" class="blog-link">
        <cell title="博客" is-link>
          <div class="badge-value blog-badge">
            <badge :text="totalNum"></badge>
            <x-icon class="go-icon" type="ios-arrow-right" size="30"></x-icon>
          </div>
        </cell>
      </router-link>
      <x-button class="logout-btn" type="default" @click.native="logout">退出</x-button>
    </group>
    <Tab type="person"></Tab>
  </div>
</template>

<script>
import { Badge, Group, Cell, XButton } from "vux";
import { mapGetters, mapActions } from "vuex";
import Tab from "../components/tab";

export default {
  components: {
    Badge,
    Group,
    Cell,
    Tab,
    XButton
  },
  data() {
    return {
      username: "",
      phone: ""
    };
  },
  created() {
    let userData;
    try {
      userData = JSON.parse(localStorage.getItem("userData"));
    } catch (error) {}
    this.username = userData.username || "...";
    this.phone = userData.phone || "...";
    this.setBlogList();
  },
  computed: {
    ...mapGetters(["totalNum"])
  },
  methods: {
    ...mapActions(["setBlogList"]),
    logout() {
      try {
        localStorage.removeItem("isLogin");
      } catch (error) {}
      this.$router.push({
        name: "login"
      });
    }
  }
};
</script>
<style lang="less">
@import "~vux/src/styles/1px.less";
.badge-value {
  display: inline-block !important;
}
.vertical-middle {
  vertical-align: middle;
}
.weui-cell_access .weui-cell__ft:after {
  display: none !important;
}
.blog-link {
  display: block;
  margin-left: 15px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  .weui-cell {
    padding-left: 0;
  }
}
a:-webkit-any-link {
  color: inherit;
  cursor: pointer;
  text-decoration: none !important;
}
.blog-badge {
  position: relative;
  .go-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
.logout-btn {
  margin-top: 15px;
}
</style>
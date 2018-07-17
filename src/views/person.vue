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
            <badge :text="totalNum"></badge>&nbsp;&nbsp;&gt;
          </div>
        </cell>
      </router-link>
    </group>
    <Tab type="person"></Tab>
  </div>
</template>

<script>
import { Badge, Group, Cell } from "vux";
import { mapGetters, mapActions } from "vuex";
import Tab from '../components/tab'

export default {
  components: {
    Badge,
    Group,
    Cell,
    Tab,
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
    ...mapActions(["setBlogList"])
  }
};
</script>
<style lang="less">
@import '~vux/src/styles/1px.less';
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
  border-top: 1px solid #D9D9D9;
  .weui-cell {
    padding-left: 0;
  }
}
a:-webkit-any-link {
  color: inherit;
  cursor: pointer;
  text-decoration: none !important;
}
</style>
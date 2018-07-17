<template>
  <div class="index-wrapper">
    <div style="margin: 10px 0;overflow: hidden;" v-for="(item, index) in blogList" :key="index">
      <a :href ="'https://heyrumour.github.io/' + item.path ">
				<masker style="border-radius: 2px;">
        <div class="m-img"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">{{item.date.slice(0, 10)}}</span>
        </div>
      </masker>
			</a>
    </div>
		<Tab type="index"></Tab>
  </div>
</template>

<script>
import { Masker } from "vux";
import api from "./../http/apiPath";
import { mapState, mapActions } from "vuex";
import Tab from '../components/tab'

export default {
  components: {
		Masker,
		Tab,
  },
  data() {
    return {
      // blogList: []
    };
  },
  created() {
    // this.$http.get(api.blogListApi).then(({ data }) => {
    //   if (data.code == 200 && data.msg == "success") {
    //     this.blogList = data.data.list;
    //   }
    // });
    this.setBlogList();
  },
  computed: {
    ...mapState({
      blogList: state => state.blog.blog_list
    })
  },
  methods: {
    ...mapActions(["setBlogList"])
  }
};
</script>

<style lang="less">
.index-wrapper {
	padding-bottom: 50px;
}

.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>
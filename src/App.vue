<template>
  <div>
    <loading v-model='isLoading'></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import { Loading } from "vux";
import { mapState } from "vuex";
export default {
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.loading.isLoading
    })
  }
};
</script>
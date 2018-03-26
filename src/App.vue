<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from '@/components/Main.vue';
import router from '@/router/index';
import store from '@/vuex/index';

export default {
  name: 'app',
  router,
  components: {
    Main
  },
  store
};
</script>
<style lang="scss">
@import '../node_modules/basscss/css/basscss.min.css';
body {
  font-family: 'SFNSText', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  font-size: 15px;
  margin: 0;
}
input {
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 300;
  margin-left: 10px;
}
.container {
  padding-left: 13px;
  padding-right: 13px;
}
</style>

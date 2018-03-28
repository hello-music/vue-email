<template>
    <Main v-bind="{loading, showError, showSuccess, error, resetAjax, serverMsg}" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { MODULE_NAME as AJAX_MODULE, RESET } from '../../../vuex/ajax';
import Main from './Main.vue';

const msgMapping = {
  success: 'Email has been sent out!',
  timeout: "Server's busy, please try again later.",
  fail: 'Something went wrong, please try again later.'
};
export default {
  name: 'MainContainer',
  components: {
    Main
  },
  computed: {
    ...mapGetters(AJAX_MODULE, [
      'loading',
      'showError',
      'showSuccess',
      'error'
    ]),
    serverMsg: function() {
      if (this.showError) {
        return msgMapping[this.error];
      }
      if (this.showSuccess) {
        return msgMapping['success'];
      }
      return '';
    }
  },
  methods: {
    ...mapActions(AJAX_MODULE, {
      resetAjax: RESET
    })
  }
};
</script>

<template>
    <Main :loading="loading"
          :showError="showError"
          :showSuccess="showSuccess"
          :error="error"
          :resetAjax="resetAjax"
          :serverMsg="serverMsg"
    />
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
  data() {
    return {
      msgMapping
    };
  },
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
    }
  },
  methods: {
    ...mapActions(AJAX_MODULE, {
      resetAjax: RESET
    })
  }
};
</script>

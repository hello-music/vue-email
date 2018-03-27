<template>
    <main>
        <router-view></router-view>
        <Overlay v-if="loading"><Spinner /></Overlay>
        <Overlay v-if="showSuccess"><ServerMessage :title="msgMapping['success']" v-on:ok-button-confirmed="resetAjax"/></Overlay>
        <Overlay v-if="showError"><ServerMessage :title="msgMapping[error]" v-on:ok-button-confirmed="resetAjax"/></Overlay>
    </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { MODULE_NAME as AJAX_MODULE, RESET } from '../../vuex/ajax';
import Spinner from './Spinner.vue';
import Overlay from './Overlay.vue';
import ServerMessage from './ServerMessage.vue';

const msgMapping = {
  success: 'Email has been sent out!',
  timeout: "Server's busy, please try again later.",
  fail: 'Something went wrong, please try again later.'
};
export default {
  name: 'Main',
  data() {
    return {
      msgMapping
    };
  },
  components: {
    Spinner,
    Overlay,
    ServerMessage
  },
  computed: {
    ...mapGetters(AJAX_MODULE, ['loading', 'showError', 'showSuccess', 'error'])
  },
  methods: {
    ...mapActions(AJAX_MODULE, {
      resetAjax: RESET
    })
  }
};
</script>

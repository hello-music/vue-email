<template>
    <main>
        <router-view></router-view>
        <Overlay v-if="loading"><Spinner /></Overlay>
        <Overlay v-if="showSuccess"><ServerMessage :title="'Email has been sent out!'" v-on:ok-button-confirmed="resetAjax"/></Overlay>
        <Overlay v-if="showError"><ServerMessage :title="'Something went wrong, please try again later.'" v-on:ok-button-confirmed="resetAjax"/></Overlay>
    </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { MODULE_NAME as AJAX_MODULE, RESET } from '../../vuex/ajax';
import Spinner from './Spinner.vue';
import Overlay from './Overlay.vue';
import ServerMessage from './ServerMessage.vue';
export default {
  name: 'Main',
  components: {
    Spinner,
    Overlay,
    ServerMessage
  },
  computed: {
    ...mapGetters(AJAX_MODULE, ['loading', 'showError', 'showSuccess'])
  },
  methods: {
    ...mapActions(AJAX_MODULE, {
      resetAjax: RESET
    })
  }
};
</script>

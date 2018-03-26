<template>
    <main>
        <router-view></router-view>
        <Overlay v-if="loading"><Spinner /></Overlay>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';
import { MODULE_NAME } from '../../vuex/ajax';
import Spinner from './Spinner.vue';
import Overlay from './Overlay.vue';
export default {
  name: 'Main',
  components: {
    Spinner,
    Overlay
  },
  computed: {
    ...mapGetters(MODULE_NAME, ['loading'])
  }
};
</script>

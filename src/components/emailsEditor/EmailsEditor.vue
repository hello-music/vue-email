<template>
        <div class="flex flex-wrap">
            <div v-for="(email,index) in emails" v-bind:key="index">
                <span>{{email}}</span>
                <span v-on:click="removeEmail(index)">x</span>
            </div>
            <div><input
                    type="text"
                    v-autowidth="emailInputConfig"
                    v-model="inputEmail"
                    placeholder="Watch me change size with my content!"
                    v-on:keyup.enter="processNewEmail"
                    v-on:blur="processNewEmail"
                    v-on:keydown.tab="processNewEmail"
            /></div>
        </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { MODULE_NAME, ADD, REMOVE, getActionName } from '../../vuex/to';
export default {
  name: 'EmailsEditor',
  data() {
    return {
      inputEmail: '',
      emailInputConfig: { maxWidth: '300px', minWidth: '20px', comfortZone: 0 }
    };
  },
  computed: {
    ...mapGetters(MODULE_NAME, ['emails'])
  },
  methods: {
    processNewEmail(e) {
      e.preventDefault();
      this.inputEmail = e.target.value;
      this.$store.dispatch(getActionName(MODULE_NAME, ADD), this.inputEmail);
      this.inputEmail = '';
    },
    removeEmail(index) {
      this.$store.dispatch(getActionName(MODULE_NAME, REMOVE), index);
    }
  }
};
</script>

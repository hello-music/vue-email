<template>
    <input
        type="email"
        v-autowidth="emailInputConfig"
        v-model="email"
        v-on:keyup.enter="processNewEmail"
        v-on:blur="processNewEmailAndEndEditing"
        v-on:keydown.tab="processNewEmail"
        v-on:keydown.delete="popEmail"
        ref="email"
    />
</template>

<script>
export default {
  name: 'EmailsEditorInput',
  props: {
    isEditing: Boolean,
    endEditing: Function,
    startEditing: Function,
    emailInputConfig: Object,
    popEmail: Function,
    addEmail: Function
  },
  data() {
    return {
      email: ''
    };
  },
  methods: {
    processNewEmail(e) {
      e.preventDefault();
      this.startEditing();
      this.email = e.target.value;
      if (this.email.trim() !== '') {
        this.addEmail(this.email);
      }
      this.email = '';
    },
    processNewEmailAndEndEditing(e) {
      this.processNewEmail(e);
      this.endEditing();
    }
  },
  watch: {
    isEditing: function(val) {
      if (val === true) {
        this.$refs.email.focus();
      }
    }
  }
};
</script>

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
    emailInputConfig: Object,
    popEmail: Function,
    processNewEmail: Function,
    processNewEmailAndEndEditing: Function
  },
  data() {
    return {
      email: ''
    };
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

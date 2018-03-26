<template>
        <input
                type="email"
                v-autowidth="emailInputConfig"
                v-model="email"
                v-on:keyup.enter="processNewEmail"
                v-on:blur="processNewEmailAndEndEditing"
                v-on:keydown.tab="processNewEmail"
                ref="email"
        />
</template>

<script>
export default {
  name: 'EmailsEditorInput',
  props: {
    isEditing: Boolean
  },
  data() {
    return {
      email: '',
      emailInputConfig: { maxWidth: '300px', minWidth: '20px', comfortZone: 0 }
    };
  },
  methods: {
    processNewEmail(e) {
      e.preventDefault();
      this.email = e.target.value;
      this.$emit('new-email', this.email);
      this.email = '';
    },
    processNewEmailAndEndEditing(e) {
      this.processNewEmail(e);
      this.$emit('end-editing');
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

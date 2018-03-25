<template>
            <input
                    type="email"
                    v-autowidth="emailInputConfig"
                    v-model="email"
                    placeholder="Watch me change size with my content!"
                    v-on:keyup.enter="processNewEmail"
                    v-on:blur="processNewEmail"
                    v-on:keydown.tab="processNewEmail"
            />
</template>

<script>
export default {
  name: 'EmailsEditorInput',
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
    }
  }
};
</script>

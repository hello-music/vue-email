<template>
      <div class="flex email-header items-center justify-end container">
          <button :disabled="!readyToSend" v-on:click="triggerSendEmail">Send</button>
      </div>
</template>

<script>
export default {
  name: 'EmailHeader',
  props: {
    readyToSend: Boolean
  },
  methods: {
    triggerSendEmail() {
      this.$emit('send-email');
    }
  }
};
</script>

<style scoped lang="scss">
.email-header {
  height: 44px;
  border-bottom: 1px solid #a5c6df;
}
button {
  cursor: pointer;
  border: none;
  outline: none;
  color: #167efb;
  font-size: 17px;
  &[disabled] {
    color: #dadada;
    cursor: not-allowed;
  }
}
</style>

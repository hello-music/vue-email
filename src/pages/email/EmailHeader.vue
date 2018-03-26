<template>
      <div class="flex email-header items-center justify-end container">
          <button>Send</button>
      </div>
</template>

<script>
export default {
  name: 'EmailHeader'
};
</script>

<style scoped>
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
}
</style>

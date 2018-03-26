<template>
    <div class="spinner"></div>
</template>

<script>
export default {
  name: 'Spinner'
};
</script>

<style scoped>
.spinner {
  border: 16px solid #dadada; /* Light grey */
  border-top: 16px solid #007aff; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

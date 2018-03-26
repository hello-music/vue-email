<template>
    <div class="overlay flex items-center justify-center"><slot></slot></div>
</template>

<script>
export default {
  name: 'Overlay'
};
</script>

<style scoped>
.overlay {
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>

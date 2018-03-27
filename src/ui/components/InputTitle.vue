<template>
    <span class="title">{{title}}</span>
</template>

<script>
export default {
  name: 'InputTitle',
  props: {
    title: String
  }
};
</script>

<style scoped>
.title {
  color: #999;
  margin-right: 10px;
  cursor: default;
  font-size: 15px;
  min-width: 30px;
}
</style>

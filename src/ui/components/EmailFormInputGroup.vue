<template>
    <div class="email-form-input-group container flex items-center">
        <slot></slot>
    </div>
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
.email-form-input-group {
  border-bottom: 1px solid #eaeaea;
}
</style>

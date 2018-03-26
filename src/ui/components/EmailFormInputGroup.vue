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
  min-height: 33px;
  border-bottom: 1px solid #eaeaea;
}
</style>

<template>
    <div class="email-label" v-bind:class="{ 'is-not-email': isNotEmail }">
        <label class="email">{{email}}</label>
        <span v-on:click="removeEmail" class="remove-button">x</span>
    </div>
</template>

<script>
export default {
  name: 'EmailsEditorLabel',
  props: {
    email: String,
    isNotEmail: Boolean,
    removeEmail: Function
  }
};
</script>

<style scoped="" lang="scss">
.email-label {
  padding: 3px 3px 3px 5px;
  &:hover {
    background-color: #e8f2ff;
    border: 1px solid #b2d0f0;
    border-radius: 3px;
    color: #0063cc;
    .remove-button {
      visibility: visible;
    }
  }
}

.email-label.is-not-email {
  &:hover {
    background-color: #fedede;
    border-color: #f2c7c7;
    color: #cc2d32;
  }
  .email {
    color: #ff383f;
  }
}

.email {
  color: #007aff;
}

.remove-button {
  visibility: hidden;
  padding: 3px 3px 3px 5px;
  cursor: pointer;
}
</style>

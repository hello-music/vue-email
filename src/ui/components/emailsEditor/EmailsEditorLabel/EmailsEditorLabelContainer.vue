<template>
    <EmailsEditorLabel :email="email" :index="index" :isNotEmail="isNotEmail" :removeEmail="removeEmail" />
</template>

<script>
import EmailsEditorLabel from './EmailsEditorLabel.vue';
import { isEmail } from '../../../../helpers/helper';

export default {
  name: 'EmailsEditorLabelContainer',
  components: {
    EmailsEditorLabel
  },
  props: {
    email: String,
    index: Number
  },
  computed: {
    isNotEmail: function() {
      return !isEmail(this.email);
    }
  },
  methods: {
    removeEmail() {
      this.$emit('remove-email');
    }
  }
};
</script>

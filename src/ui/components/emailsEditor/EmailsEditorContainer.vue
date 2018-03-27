<template>
        <EmailsEditor
                :emails="emails"
                :title="title"
                :emailInputConfig="emailInputConfig"
                :isEditing="isEditing"
                :processNewEmail="processNewEmail"
                :removeEmail="removeEmail"
                :startEditing="startEditing"
                :endEditing="endEditing"
        />
</template>

<script>
import EmailsEditor from './EmailsEditor.vue';
export default {
  name: 'EmailsEditorContainer',
  components: {
    EmailsEditor
  },
  props: {
    emails: Array,
    title: String
  },
  data() {
    return {
      emailInputConfig: { maxWidth: '300px', minWidth: '20px', comfortZone: 0 },
      isEditing: false
    };
  },
  methods: {
    processNewEmail(email) {
      if (email !== '') {
        this.$emit('new-email', email);
      }
    },
    removeEmail(index) {
      if (index > -1) {
        this.$emit('remove-email', index);
      }
    },
    startEditing() {
      this.isEditing = true;
    },
    endEditing() {
      this.isEditing = false;
    }
  }
};
</script>

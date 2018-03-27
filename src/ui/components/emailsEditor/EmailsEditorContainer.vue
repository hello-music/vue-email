<template>
    <EmailsEditor v-bind="{emails, title, isEditing, startEditing, endEditing, emailType}" />
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
    title: String,
    emailType: String
  },
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    startEditing() {
      this.isEditing = true;
    },
    endEditing() {
      this.isEditing = false;
    }
  }
};
</script>

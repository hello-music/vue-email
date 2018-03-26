<template>
        <div class="flex flex-wrap flex-auto items-center emails-editor"
             v-on:click="startEditing"
        >
            <InputTitle :title="title" />
            <EmailsEditorLabel v-for="(email,index) in emails" v-bind:key="index"
                               :email="email"
                               :index="index"
                               v-on:remove-email="removeEmail(index)"/>
            <EmailsEditorInput v-on:new-email="processNewEmail"
                               :isEditing="isEditing"
                               v-on:end-editing="endEditing"
                               v-on:remove-email="removeEmail(emails.length - 1)"/>
        </div>
</template>

<script>
import EmailsEditorInput from './EmailsEditorInput.vue';
import EmailsEditorLabel from './EmailsEditorLabel.vue';
import InputTitle from '../InputTitle.vue';
export default {
  name: 'EmailsEditor',
  components: {
    EmailsEditorInput,
    EmailsEditorLabel,
    InputTitle
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

<style scoped>
.emails-editor {
  cursor: text;
  min-height: 40px;
}
</style>

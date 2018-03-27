<template>
        <div class="flex flex-wrap flex-auto items-center emails-editor"
             v-on:click="startEditing"
        >
            <InputTitle :title="title" />
            <EmailsEditorLabelContainer v-for="(email,index) in emails" v-bind:key="index"
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
import EmailsEditorLabelContainer from './EmailsEditorLabel/EmailsEditorLabelContainer.vue';
import EmailsEditorInput from './EmailsEditorInput/EmailsEditorInput.vue';
import InputTitle from '../InputTitle.vue';
export default {
  name: 'EmailsEditor',
  components: {
    EmailsEditorLabelContainer,
    EmailsEditorInput,
    InputTitle
  },
  props: {
    emails: Array,
    title: String,
    emailInputConfig: Object,
    isEditing: Boolean,
    processNewEmail: Function,
    removeEmail: Function,
    startEditing: Function,
    endEditing: Function
  }
};
</script>

<style scoped>
.emails-editor {
  cursor: text;
  min-height: 40px;
}
</style>

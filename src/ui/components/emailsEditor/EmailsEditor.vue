<template>
        <div class="flex flex-wrap flex-auto items-center emails-editor"
             v-on:click="startEditing"
        >
            <InputTitle :title="title" />
            <EmailsEditorLabelContainer
                    v-for="(email,index) in emails" v-bind:key="index"
                    :emailType="emailType"
                    :email="email"
                    :index="index"/>
            <EmailsEditorInputContainer
                    :isEditing="isEditing"
                    :emailType="emailType"
                    :endEditing="endEditing"
            />
        </div>
</template>

<script>
import EmailsEditorLabelContainer from './EmailsEditorLabel/EmailsEditorLabelContainer.vue';
import EmailsEditorInputContainer from './EmailsEditorInput/EmailsEditorInputContainer.vue';
import InputTitle from '../InputTitle.vue';
export default {
  name: 'EmailsEditor',
  components: {
    EmailsEditorLabelContainer,
    EmailsEditorInputContainer,
    InputTitle
  },
  props: {
    emails: Array,
    emailType: String,
    title: String,
    isEditing: Boolean,
    endEditing: Function,
    startEditing: Function
  }
};
</script>

<style scoped>
.emails-editor {
  cursor: text;
  min-height: 40px;
}
</style>

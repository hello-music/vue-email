<template>
        <div class="flex flex-wrap items-center emails-editor"
             v-on:click="startEditing"
        >
            <span class="title">{{title}}</span>
            <EmailsEditorLabel v-for="(email,index) in emails" v-bind:key="index"
                               :email="email"
                               :index="index"
                               v-on:remove-email="removeEmail(index)"/>
            <EmailsEditorInput v-on:new-email="processNewEmail"
                               :isEditing="isEditing"
                               v-on:end-editing="endEditing" />
        </div>
</template>

<script>
import EmailsEditorInput from './EmailsEditorInput.vue';
import EmailsEditorLabel from './EmailsEditorLabel.vue';
export default {
  name: 'EmailsEditor',
  components: {
    EmailsEditorInput,
    EmailsEditorLabel
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
      this.$emit('remove-email', index);
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
  font-size: 15px;
  cursor: text;
}
.title {
  color: #999;
  margin-right: 10px;
  cursor: default;
}
</style>

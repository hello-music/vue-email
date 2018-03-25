<template>
        <div class="flex flex-wrap">
            <EmailsEditorLabel v-for="(email,index) in emails" v-bind:key="index"
                               :email="email"
                               :index="index"
                               v-on:remove-email="removeEmail(index)"/>
            <div><EmailsEditorInput v-on:new-email="processNewEmail"/></div>
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
    emails: Array
  },
  data() {
    return {
      emailInputConfig: { maxWidth: '300px', minWidth: '20px', comfortZone: 0 }
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
    }
  }
};
</script>

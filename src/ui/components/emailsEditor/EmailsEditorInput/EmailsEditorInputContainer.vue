<template>
    <EmailsEditorInput
        v-bind="{isEditing, emailInputConfig, popEmail, processNewEmail, processNewEmailAndEndEditing, handleInputChange}"
    />
</template>

<script>
import { mapActions } from 'vuex';
import autoSizeInput from 'autosize-input';
import { EMAIL_MODULE, ADD_EMAIL, POP_EMAIL } from '../../../../vuex/emails';
import EmailsEditorInput from './EmailsEditorInput.vue';

export default {
  name: 'EmailsEditorInputContainer',
  components: {
    EmailsEditorInput
  },
  props: {
    isEditing: Boolean,
    emailType: String,
    endEditing: Function,
    startEditing: Function
  },
  data() {
    return {
      email: '',
      emailInputConfig: { maxWidth: '300px', minWidth: '20px', comfortZone: 0 }
    };
  },
  methods: {
    ...mapActions(EMAIL_MODULE, [ADD_EMAIL, POP_EMAIL]),
    popEmail({ target: { value } }) {
      const { emailType: type } = this;
      this.startEditing();
      if (value === '') {
        this[POP_EMAIL](type);
      }
    },
    processNewEmail(e) {
      const { emailType: type } = this;
      const email = e.target.value.trim();

      e.preventDefault();
      this.startEditing();
      if (email !== '') {
        this[ADD_EMAIL]({ type, email });
      }
      e.target.value = '';
    },
    processNewEmailAndEndEditing(e) {
      this.processNewEmail(e);
      this.endEditing();
    },
    handleInputChange({ srcElement }) {
      this.startEditing();
      autoSizeInput(srcElement, { minWidth: true });
    }
  }
};
</script>

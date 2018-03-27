<template>
    <EmailsEditorInput
        v-bind="{isEditing, emailInputConfig, popEmail, processNewEmail, processNewEmailAndEndEditing, handleInputChange}"
    />
</template>

<script>
import { mapActions } from 'vuex';
import autoSizeInput from 'autosize-input';
import {
  MODULE_NAME as TO_MODULE,
  ADD as ADD_TO,
  POP as POP_TO
} from '../../../../vuex/to';
import {
  MODULE_NAME as CC_MODULE,
  ADD as ADD_CC,
  POP as POP_CC
} from '../../../../vuex/cc';
import {
  MODULE_NAME as BCC_MODULE,
  ADD as ADD_BCC,
  POP as POP_BCC
} from '../../../../vuex/bcc';
import EmailsEditorInput from './EmailsEditorInput.vue';
import {
  BCC_EMAIL_TYPE,
  CC_EMAIL_TYPE,
  TO_EMAIL_TYPE
} from '../../../../helpers/helper';

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
    ...mapActions(TO_MODULE, {
      addTo: ADD_TO,
      popTo: POP_TO
    }),
    ...mapActions(CC_MODULE, {
      addCc: ADD_CC,
      popCc: POP_CC
    }),
    ...mapActions(BCC_MODULE, {
      addBcc: ADD_BCC,
      popBcc: POP_BCC
    }),
    getAddEmailFunc() {
      switch (this.emailType) {
        case TO_EMAIL_TYPE:
          return this.addTo;
        case CC_EMAIL_TYPE:
          return this.addCc;
        case BCC_EMAIL_TYPE:
          return this.addBcc;
      }
    },
    getPopEmailFunc() {
      switch (this.emailType) {
        case TO_EMAIL_TYPE:
          return this.popTo;
        case CC_EMAIL_TYPE:
          return this.popCc;
        case BCC_EMAIL_TYPE:
          return this.popBcc;
      }
    },
    addEmail(email) {
      this.getAddEmailFunc()(email);
    },
    popEmail({ target: { value } }) {
      this.startEditing();
      if (value === '') {
        this.getPopEmailFunc()();
      }
    },
    processNewEmail(e) {
      e.preventDefault();
      const email = e.target.value.trim();
      this.startEditing();
      if (email !== '') {
        this.addEmail(email);
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

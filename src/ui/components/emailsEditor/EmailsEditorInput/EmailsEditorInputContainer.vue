<template>
        <EmailsEditorInput
                :isEditing="isEditing"
                :endEditing="endEditing"
                :emailInputConfig="emailInputConfig"
                :popEmail="popEmail"
                :addEmail="addEmail"
        />
</template>

<script>
import { mapActions } from 'vuex';
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
export default {
  name: 'EmailsEditorInputContainer',
  components: {
    EmailsEditorInput
  },
  props: {
    isEditing: Boolean,
    emailType: String,
    endEditing: Function
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
        case 'to':
          return this.addTo;
        case 'cc':
          return this.addCc;
        case 'bcc':
          return this.addBcc;
      }
    },
    getPopEmailFunc() {
      switch (this.emailType) {
        case 'to':
          return this.popTo;
        case 'cc':
          return this.popCc;
        case 'bcc':
          return this.popBcc;
      }
    },
    addEmail(email) {
      this.getAddEmailFunc()(email);
    },
    popEmail() {
      this.getPopEmailFunc()();
    }
  }
};
</script>

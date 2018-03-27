<template>
    <EmailsEditorLabel :email="email" :index="index" :isNotEmail="isNotEmail" :removeEmail="removeEmail" />
</template>

<script>
import { mapActions } from 'vuex';
import {
  MODULE_NAME as TO_MODULE,
  REMOVE as REMOVE_TO
} from '../../../../vuex/to';
import {
  MODULE_NAME as CC_MODULE,
  REMOVE as REMOVE_CC
} from '../../../../vuex/cc';
import {
  MODULE_NAME as BCC_MODULE,
  REMOVE as REMOVE_BCC
} from '../../../../vuex/bcc';
import EmailsEditorLabel from './EmailsEditorLabel.vue';
import { isEmail } from '../../../../helpers/helper';

export default {
  name: 'EmailsEditorLabelContainer',
  components: {
    EmailsEditorLabel
  },
  props: {
    email: String,
    index: Number,
    emailType: String
  },
  computed: {
    isNotEmail: function() {
      return !isEmail(this.email);
    }
  },
  methods: {
    ...mapActions(TO_MODULE, {
      removeTo: REMOVE_TO
    }),
    ...mapActions(CC_MODULE, {
      removeCc: REMOVE_CC
    }),
    ...mapActions(BCC_MODULE, {
      removeBcc: REMOVE_BCC
    }),
    getRemoveEmailFunc() {
      switch (this.emailType) {
        case 'to':
          return this.removeTo;
        case 'cc':
          return this.removeCc;
        case 'bcc':
          return this.removeBcc;
      }
    },
    removeEmail() {
      this.getRemoveEmailFunc()(this.index);
    }
  }
};
</script>

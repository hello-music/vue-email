<template>
    <EmailsEditorLabel
            v-bind="{
                email,
                index,
                isNotEmail,
                removeEmail
            }"
    />
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
import {
  BCC_EMAIL_TYPE,
  CC_EMAIL_TYPE,
  isEmail,
  TO_EMAIL_TYPE
} from '../../../../helpers/helper';

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
        case TO_EMAIL_TYPE:
          return this.removeTo;
        case CC_EMAIL_TYPE:
          return this.removeCc;
        case BCC_EMAIL_TYPE:
          return this.removeBcc;
      }
    },
    removeEmail() {
      this.getRemoveEmailFunc()(this.index);
    }
  }
};
</script>

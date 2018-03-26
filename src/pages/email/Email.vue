<template>
      <div class="flex flex-column">
          <EmailsEditor
                  :emails="toEmails"
                  :title="'To:'"
                  v-on:new-email="addToEmail"
                  v-on:remove-email="removeToEmail"
          />
          <EmailsEditor
                  :emails="ccEmails"
                  :title="'Cc:'"
                  v-on:new-email="addCcEmail"
                  v-on:remove-email="removeCcEmail"
          />
          <EmailsEditor
                  :emails="bccEmails"
                  :title="'Bcc:'"
                  v-on:new-email="addBccEmail"
                  v-on:remove-email="removeBccEmail"
          />
          <div class="flex flex-wrap items-center">
              <InputTitle :title="'Subject:'" />
              <input class="flex-auto" v-on:input="updateSubject"/>
          </div>
      </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  MODULE_NAME as TO_MODULE,
  ADD as ADD_TO,
  REMOVE as REMOVE_TO
} from '../../vuex/to';
import {
  MODULE_NAME as CC_MODULE,
  ADD as ADD_CC,
  REMOVE as REMOVE_CC
} from '../../vuex/cc';
import {
  MODULE_NAME as BCC_MODULE,
  ADD as ADD_BCC,
  REMOVE as REMOVE_BCC
} from '../../vuex/bcc';
import {
  MODULE_NAME as SUBJECT_MODULE,
  UPDATE as UPDATE_SUBJECT
} from '../../vuex/subject';
import EmailsEditor from '../../components/emailsEditor/EmailsEditor.vue';
import InputTitle from '../../components/InputTitle.vue';
//helper
/***************************************************/
const getActionName = (moduleName, actionName) => `${moduleName}/${actionName}`;

export default {
  name: 'Email',
  components: {
    EmailsEditor,
    InputTitle
  },
  computed: {
    ...mapGetters(TO_MODULE, { toEmails: 'emails' }),
    ...mapGetters(CC_MODULE, { ccEmails: 'emails' }),
    ...mapGetters(BCC_MODULE, { bccEmails: 'emails' })
  },
  methods: {
    addToEmail(email) {
      this.$store.dispatch(getActionName(TO_MODULE, ADD_TO), email);
    },
    removeToEmail(index) {
      this.$store.dispatch(getActionName(TO_MODULE, REMOVE_TO), index);
    },
    addCcEmail(email) {
      this.$store.dispatch(getActionName(CC_MODULE, ADD_CC), email);
    },
    removeCcEmail(index) {
      this.$store.dispatch(getActionName(CC_MODULE, REMOVE_CC), index);
    },
    addBccEmail(email) {
      this.$store.dispatch(getActionName(BCC_MODULE, ADD_BCC), email);
    },
    removeBccEmail(index) {
      this.$store.dispatch(getActionName(BCC_MODULE, REMOVE_BCC), index);
    },
    updateSubject({ target: { value } }) {
      this.$store.dispatch(
        getActionName(SUBJECT_MODULE, UPDATE_SUBJECT),
        value
      );
    }
  }
};
</script>

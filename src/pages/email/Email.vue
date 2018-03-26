<template>
    <div>
        <EmailHeader :readyToSend="isReady"/>
      <div class="flex flex-column form-container">
          <EmailFormInputGroup>
              <EmailsEditor
                      :emails="toEmails"
                      :title="'To:'"
                      v-on:new-email="addToEmail"
                      v-on:remove-email="removeToEmail"
              />
          </EmailFormInputGroup>
          <EmailFormInputGroup>
              <EmailsEditor
                      :emails="ccEmails"
                      :title="'Cc:'"
                      v-on:new-email="addCcEmail"
                      v-on:remove-email="removeCcEmail"
              />
          </EmailFormInputGroup>
          <EmailFormInputGroup>
              <EmailsEditor
                      :emails="bccEmails"
                      :title="'Bcc:'"
                      v-on:new-email="addBccEmail"
                      v-on:remove-email="removeBccEmail"
              />
          </EmailFormInputGroup>
          <EmailFormInputGroup>
              <div class="flex flex-wrap items-center">
                  <InputTitle :title="'Subject:'" />
                  <input class="flex-auto" v-on:input="updateSubject"/>
              </div>
          </EmailFormInputGroup>
          <div class="flex flex-auto container">
              <textarea v-on:input="updateContent"></textarea>
          </div>
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
import {
  MODULE_NAME as CONTENT_MODULE,
  UPDATE as UPDATE_CONTENT
} from '../../vuex/content';
import EmailsEditor from '../../components/emailsEditor/EmailsEditor.vue';
import InputTitle from '../../components/InputTitle.vue';
import EmailFormInputGroup from '../../components/EmailFormInputGroup.vue';
import EmailHeader from './EmailHeader.vue';
//helper
/***************************************************/
const getActionName = (moduleName, actionName) => `${moduleName}/${actionName}`;

export default {
  name: 'Email',
  components: {
    EmailsEditor,
    InputTitle,
    EmailFormInputGroup,
    EmailHeader
  },
  computed: {
    //    fetch emails
    ...mapGetters(TO_MODULE, { toEmails: 'emails' }),
    ...mapGetters(CC_MODULE, { ccEmails: 'emails' }),
    ...mapGetters(BCC_MODULE, { bccEmails: 'emails' }),
    //    fetch if valid
    ...mapGetters(TO_MODULE, ['toEmailsAreAllValid']),
    ...mapGetters(BCC_MODULE, ['bccEmailsAreAllValid']),
    ...mapGetters(CC_MODULE, ['ccEmailsAreAllValid']),
    isReady: function() {
      return (
        this.toEmailsAreAllValid &&
        this.bccEmailsAreAllValid &&
        this.ccEmailsAreAllValid
      );
    }
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
    },
    updateContent({ target: { value } }) {
      this.$store.dispatch(
        getActionName(CONTENT_MODULE, UPDATE_CONTENT),
        value
      );
    }
  }
};
</script>

<style scoped>
textarea {
  resize: none;
  width: 100%;
  outline: none;
  border: none;
  margin-top: 10px;
  font-weight: 300;
  font-size: 15px;
}
.form-container {
  height: calc(100vh - 44px);
}
</style>

<template>
    <div>
        <EmailHeader :readyToSend="isReady" v-on:send-email="sendEmail"/>
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
              <div class="flex flex-wrap flex-auto items-center">
                  <InputTitle :title="'Subject:'" />
                  <input class="flex-auto subject" v-on:input="updateSubject" :value="subject"/>
              </div>
          </EmailFormInputGroup>
          <div class="flex flex-auto container">
              <textarea v-on:input="updateContent" :value="content"></textarea>
          </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {
  MODULE_NAME as TO_MODULE,
  ADD as ADD_TO,
  REMOVE as REMOVE_TO
} from '../../../vuex/to';
import {
  MODULE_NAME as CC_MODULE,
  ADD as ADD_CC,
  REMOVE as REMOVE_CC
} from '../../../vuex/cc';
import {
  MODULE_NAME as BCC_MODULE,
  ADD as ADD_BCC,
  REMOVE as REMOVE_BCC
} from '../../../vuex/bcc';
import {
  MODULE_NAME as SUBJECT_MODULE,
  UPDATE as UPDATE_SUBJECT
} from '../../../vuex/subject';
import {
  MODULE_NAME as CONTENT_MODULE,
  UPDATE as UPDATE_CONTENT
} from '../../../vuex/content';
import EmailsEditor from '../../components/emailsEditor/EmailsEditor.vue';
import InputTitle from '../../components/InputTitle.vue';
import EmailFormInputGroup from '../../components/EmailFormInputGroup.vue';
import EmailHeader from './EmailHeader.vue';
import { ajaxSendEmail } from '../../../services/email.service';
import { fakeFail, fakeSuccess } from '../../../helpers/ajax';
// helper
/**************************************************/
const getFakePromise = demoQuery =>
  demoQuery === 'error' ? fakeFail : fakeSuccess;
const getTimeout = demoQuery => (demoQuery === 'timeout' ? 500 : 2000);
// component
/**************************************************/
export default {
  name: 'Email',
  components: {
    EmailsEditor,
    InputTitle,
    EmailFormInputGroup,
    EmailHeader
  },
  computed: {
    ...mapGetters(TO_MODULE, {
      toEmails: 'emails',
      toEmailsAreAllValid: 'toEmailsAreAllValid'
    }),
    ...mapGetters(CC_MODULE, {
      ccEmails: 'emails',
      ccEmailsAreAllValid: 'ccEmailsAreAllValid'
    }),
    ...mapGetters(BCC_MODULE, {
      bccEmails: 'emails',
      bccEmailsAreAllValid: 'bccEmailsAreAllValid'
    }),
    ...mapGetters(SUBJECT_MODULE, ['subject']),
    ...mapGetters(CONTENT_MODULE, ['content']),
    isReady: function() {
      return (
        this.toEmailsAreAllValid &&
        this.bccEmailsAreAllValid &&
        this.ccEmailsAreAllValid
      );
    }
  },
  methods: {
    ...mapActions(TO_MODULE, {
      addToEmail: ADD_TO,
      removeToEmail: REMOVE_TO
    }),
    ...mapActions(CC_MODULE, {
      addCcEmail: ADD_CC,
      removeCcEmail: REMOVE_CC
    }),
    ...mapActions(BCC_MODULE, {
      addBccEmail: ADD_BCC,
      removeBccEmail: REMOVE_BCC
    }),
    ...mapActions(SUBJECT_MODULE, {
      updateSubjectVuex: UPDATE_SUBJECT
    }),
    ...mapActions(CONTENT_MODULE, {
      updateContentVuex: UPDATE_CONTENT
    }),
    updateSubject({ target: { value } }) {
      this.updateSubjectVuex(value.trim());
    },
    updateContent({ target: { value } }) {
      this.updateContentVuex(value.trim());
    },
    sendEmail() {
      const { demo } = this.$route.query;
      ajaxSendEmail(this.$store.dispatch, {
        fakePromise: getFakePromise(demo),
        timeout: getTimeout(demo)
      });
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
  height: calc(100vh - 55px);
}
.subject {
  min-height: 50px;
}
</style>

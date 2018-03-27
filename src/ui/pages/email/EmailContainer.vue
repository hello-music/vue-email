<template>
    <Email
        :toEmails="toEmails"
        :toEmailsAreAllValid="toEmailsAreAllValid"
        :addToEmail="addToEmail"
        :removeToEmail="removeToEmail"
        :ccEmails="ccEmails"
        :ccEmailsAreAllValid="ccEmailsAreAllValid"
        :addCcEmail="addCcEmail"
        :removeCcEmail="removeCcEmail"
        :bccEmails="bccEmails"
        :bccEmailsAreAllValid="bccEmailsAreAllValid"
        :addBccEmail="addBccEmail"
        :removeBccEmail="removeBccEmail"
        :subject="subject"
        :updateSubject="updateSubject"
        :content="content"
        :updateContent="updateContent"
        :isReady="isReady"
        :sendEmail="sendEmail"
    />
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
import Email from './Email.vue';
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
  name: 'EmailContainer',
  components: {
    Email
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

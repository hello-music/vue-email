<template>
    <EmailHeader
        :readyToSend="isReady"
        :sendEmail="sendEmail"
    />
</template>

<script>
import { mapGetters } from 'vuex';
import { MODULE_NAME as TO_MODULE } from '../../../../vuex/to';
import { MODULE_NAME as CC_MODULE } from '../../../../vuex/cc';
import { MODULE_NAME as BCC_MODULE } from '../../../../vuex/bcc';
import EmailHeader from './EmailHeader.vue';
import { ajaxSendEmail } from '../../../../services/email.service';
import { fakeFail, fakeSuccess } from '../../../../helpers/ajax';
// helper
/**************************************************/
const getFakePromise = demoQuery =>
  demoQuery === 'error' ? fakeFail : fakeSuccess;
const getTimeout = demoQuery => (demoQuery === 'timeout' ? 500 : 2000);
// component
/**************************************************/
export default {
  name: 'EmailHeaderContainer',
  components: {
    EmailHeader
  },
  computed: {
    ...mapGetters(TO_MODULE, {
      toEmailsAreAllValid: 'toEmailsAreAllValid'
    }),
    ...mapGetters(CC_MODULE, {
      ccEmailsAreAllValid: 'ccEmailsAreAllValid'
    }),
    ...mapGetters(BCC_MODULE, {
      bccEmailsAreAllValid: 'bccEmailsAreAllValid'
    }),
    isReady: function() {
      return (
        this.toEmailsAreAllValid &&
        this.bccEmailsAreAllValid &&
        this.ccEmailsAreAllValid
      );
    }
  },
  methods: {
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

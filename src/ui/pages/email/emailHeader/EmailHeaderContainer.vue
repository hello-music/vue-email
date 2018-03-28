<template>
    <EmailHeader
        :readyToSend="isReady"
        :sendEmail="sendEmail"
    />
</template>

<script>
import { mapGetters } from 'vuex';
import { EMAIL_MODULE } from '../../../../vuex/emails';
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
    ...mapGetters(EMAIL_MODULE, [
      'toEmailsAreAllValid',
      'ccEmailsAreAllValid',
      'bccEmailsAreAllValid'
    ]),
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

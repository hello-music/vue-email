<template>
    <Email
        v-bind="{
          toEmails,
          ccEmails,
          bccEmails,
          subject,
          updateSubject,
          content,
          updateContent
        }"
    />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { EMAIL_MODULE } from '../../../vuex/emails';
import { SUBJECT_MODULE, UPDATE_SUBJECT } from '../../../vuex/subject';
import { CONTENT_MODULE, UPDATE_CONTENT } from '../../../vuex/content';
import Email from './Email.vue';

export default {
  name: 'EmailContainer',
  components: {
    Email
  },
  computed: {
    ...mapGetters(EMAIL_MODULE, ['toEmails', 'bccEmails', 'ccEmails']),
    ...mapGetters(SUBJECT_MODULE, ['subject']),
    ...mapGetters(CONTENT_MODULE, ['content'])
  },
  methods: {
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
    }
  }
};
</script>

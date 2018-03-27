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
import { MODULE_NAME as TO_MODULE } from '../../../vuex/to';
import { MODULE_NAME as CC_MODULE } from '../../../vuex/cc';
import { MODULE_NAME as BCC_MODULE } from '../../../vuex/bcc';
import {
  MODULE_NAME as SUBJECT_MODULE,
  UPDATE as UPDATE_SUBJECT
} from '../../../vuex/subject';
import {
  MODULE_NAME as CONTENT_MODULE,
  UPDATE as UPDATE_CONTENT
} from '../../../vuex/content';
import Email from './Email.vue';

export default {
  name: 'EmailContainer',
  components: {
    Email
  },
  computed: {
    ...mapGetters(TO_MODULE, {
      toEmails: 'emails'
    }),
    ...mapGetters(CC_MODULE, {
      ccEmails: 'emails'
    }),
    ...mapGetters(BCC_MODULE, {
      bccEmails: 'emails'
    }),
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

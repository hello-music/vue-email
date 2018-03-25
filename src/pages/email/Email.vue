<template>
      <div>
          <EmailsEditor
                  :emails="toEmails"
                  v-on:new-email="addToEmail"
                  v-on:remove-email="removeToEmail"
          />
      </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  MODULE_NAME as TO_MODULE,
  ADD as ADD_TO,
  REMOVE as REMOVE_TO
} from '../../vuex/to';
import EmailsEditor from '../../components/emailsEditor/EmailsEditor.vue';
//helper
/***************************************************/
const getActionName = (moduleName, actionName) => `${moduleName}/${actionName}`;

export default {
  name: 'Email',
  components: {
    EmailsEditor
  },
  computed: {
    ...mapGetters(TO_MODULE, { toEmails: 'emails' })
  },
  methods: {
    addToEmail(email) {
      this.$store.dispatch(getActionName(TO_MODULE, ADD_TO), email);
    },
    removeToEmail(index) {
      this.$store.dispatch(getActionName(TO_MODULE, REMOVE_TO), index);
    }
  }
};
</script>

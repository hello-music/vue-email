<template>
    <EmailsEditorLabel
        v-bind="{email, index, isNotEmail, removeEmail}"
    />
</template>

<script>
import { mapActions } from 'vuex';
import { EMAIL_MODULE, REMOVE_EMAIL } from '../../../../vuex/emails';
import EmailsEditorLabel from './EmailsEditorLabel.vue';
import { isEmail } from '../../../../helpers/helper';

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
    ...mapActions(EMAIL_MODULE, [REMOVE_EMAIL]),
    removeEmail() {
      const { emailType: type, index } = this;
      this[REMOVE_EMAIL]({ type, index });
    }
  }
};
</script>

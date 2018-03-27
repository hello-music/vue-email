<template>
    <div>
        <EmailHeader :readyToSend="isReady" v-on:send-email="sendEmail"/>
      <div class="flex flex-column form-container">
          <EmailFormInputGroup>
              <EmailsEditorContainer
                      :emails="toEmails"
                      :title="'To:'"
                      :emailType="'to'"
              />
          </EmailFormInputGroup>
          <EmailFormInputGroup>
              <EmailsEditorContainer
                      :emails="ccEmails"
                      :title="'Cc:'"
                      :emailType="'cc'"
              />
          </EmailFormInputGroup>
          <EmailFormInputGroup>
              <EmailsEditorContainer
                      :emails="bccEmails"
                      :title="'Bcc:'"
                      :emailType="'bcc'"
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
import EmailsEditorContainer from '../../components/emailsEditor/EmailsEditorContainer.vue';
import InputTitle from '../../components/InputTitle.vue';
import EmailFormInputGroup from '../../components/EmailFormInputGroup.vue';
import EmailHeader from './emailHeader/EmailHeader.vue';
// component
/**************************************************/
export default {
  name: 'Email',
  components: {
    EmailsEditorContainer,
    InputTitle,
    EmailFormInputGroup,
    EmailHeader
  },
  props: {
    // to email
    toEmails: Array,
    // cc email
    ccEmails: Array,
    // bcc email
    bccEmails: Array,
    // subject
    subject: String,
    updateSubject: Function,
    // content
    content: String,
    updateContent: Function,
    // others
    isReady: Boolean,
    sendEmail: Function
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

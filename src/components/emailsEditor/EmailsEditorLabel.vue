<template>
    <div>
        <span>{{isEmail}}</span>
        <span>{{email}}</span>
        <span v-on:click="removeEmail">x</span>
    </div>
</template>

<script>
//helper
/***************************************************/
const isEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return re.test(String(email).toLowerCase());
};
export default {
  name: 'EmailsEditorLabel',
  props: {
    email: String,
    index: Number
  },
  computed: {
    isEmail: function() {
      return isEmail(this.email);
    }
  },
  methods: {
    removeEmail() {
      this.$emit('remove-email');
    }
  }
};
</script>

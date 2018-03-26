<template>
    <div class="server-message flex flex-column">
        <span class="title self-center">{{title}}</span>
        <button class="ok-button self-end" v-on:click="confirmed">OK</button>
    </div>
</template>

<script>
export default {
  name: 'ServerMessage',
  props: {
    title: String
  },
  methods: {
    confirmed() {
      this.$emit('ok-button-confirmed');
    }
  }
};
</script>

<style scoped>
.server-message {
  height: 149px;
  width: 450px;
  background-color: white;
  border-radius: 8px;
}
.title {
  font-size: 19px;
  margin-top: 35px;
}
.ok-button {
  padding: 0 20px;
  margin-top: 50px;
  margin-right: 20px;
}
</style>

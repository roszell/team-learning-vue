<template>
  <div>
    <div v-if="!isLoggedIn">
        <p>Please login</p>
        <input v-model="userName">
        <button v-on:click="login">Login</button>
    </div>
    <div v-else>
        <p>Welcome {{ userNameFromStore }}!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
  },
  data: function () {
    return {
        userName: ""
    }
  },
  methods: {
      login: function () {
          this.$store.commit('setUserName', { userName: this.userName });
          this.userName = "";
      }
  },
  computed: {
      userNameFromStore: function () {
          return this.$store.state.userName;
      },
      isLoggedIn: function () {
          return this.$store.getters.isLoggedIn;
      }
  }
}
</script>

<style>
</style>

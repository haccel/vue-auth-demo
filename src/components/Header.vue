<template>
  <header class="ui header">
    <nav>
      <router-link to="/" class="button">Home</router-link>
      <router-link to="dashboard" class="button" v-if="user.signed">Dashboard</router-link>
      <router-link to="another" class="button" v-if="user.signed">Another</router-link>
      <router-link to="sign-in" class="button" v-if="!user.signed">Sign-in</router-link>
      <router-link to="sign-up" class="button" v-if="!user.signed">Sign-up</router-link>
      <a class="button" v-on:click="signOut" v-if="user.signed">Sign-out</a>
    </nav>
  </header>
</template>

<script>
import auth from '../auth';
export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {

    signOut: function() {
      auth.logout(this , ()=>{
          this.$router.replace('sign-in');
      });
    }
  }
};
</script>

<style lang="scss">
// Basic styles are pulled in from the Bulma framework https://bulma.io/
// These style tags could be omitted as they arre not used.
</style>
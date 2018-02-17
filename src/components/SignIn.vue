<template>
  <section class="section">
    <h1 class="title has-text-centered">Sign-in</h1>
    <div class="columns">
      <div class="column is-one-third">

        <div class="card">
          <div class="card-header is-centered">
            <h2 class="card-header-title is-centered">Sign in to Your Account</h2>
          </div>
          <div class="card-content">
            <form v-on:submit.prevent>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" placeholder="joe@doe.com" v-model="email">
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input class="input" type="password" v-model="password">
                </div>
              </div>
              <button type="submit" class="button is-primary" v-on:click="signIn">Sign-in</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import auth from '../auth'
export default {
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn: function() {
      auth.login(this.email,this.password,
        ()=>{
          this.$router.replace("dashboard");
        },
        ()=>{
          alert(res);
        }
      );
    }
  }
};
</script>

<style lang="scss">

</style>

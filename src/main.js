import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { store } from './store/store';
import { routes } from './router/routes';
import auth from './auth'


Vue.use(VueResource)
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

// Check before each page load whether the page requires authentication/
// if it does check whether the user is signed into the web app or
// redirect to the sign-in page to enable them to sign-in
router.beforeEach((to, from, next) => {

  const currentUser = auth.user;
  console.log('for each');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser.signed) {
    next('/sign-in');
  } else if (requiresAuth && currentUser.signed) {
    next();
  } else {
    next();
  }

});


new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
});


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyBD6iH7iy0p3ieShDpmFW_fQ0uz9AMe21s",
  authDomain: "login-demo-fb636.firebaseapp.com",
  projectId: "login-demo-fb636",
  storageBucket: "login-demo-fb636.appspot.com",
  messagingSenderId: "42869366684",
  appId: "1:42869366684:web:70a3e22ed9bb166794f259",
  measurementId: "G-8J9ES1FY2F"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

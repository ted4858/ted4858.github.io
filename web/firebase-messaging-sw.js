importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAb3_YsBHudRNfbmyn5UtfiLgklqbfWBfg",
  authDomain: "sns-login-9201c.firebaseapp.com",
  projectId: "sns-login-9201c",
  storageBucket: "sns-login-9201c.appspot.com",
  messagingSenderId: "501487577104",
  appId: "1:501487577104:web:26545b6ef8fd2e17b90295",
  measurementId: "G-XDG98FJGBQ"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
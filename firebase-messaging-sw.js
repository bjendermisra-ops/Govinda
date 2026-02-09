importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
   apiKey: "AIzaSyAn38HlPSpz7yRZUmDG7qnedplFjv3WvAE",
   authDomain: "iskcon-food.firebaseapp.com",
   databaseURL: "https://iskcon-food-default-rtdb.firebaseio.com",
   projectId: "iskcon-food",
   storageBucket: "iskcon-food.firebasestorage.app",
   messagingSenderId: "987150159471",
   appId: "1:987150159471:web:c5f8506191ef06d147479a"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKkhc5IkA65STmeUrIgSBI6nDpLrBG5GmZ1pzSkHZnSl5pTc1fzyHFmg1wqwDkeEaa0HZM6vcNk2WWTPuUpvhq-Uee_FUtPQwP2OUyAg8wzbJV1rk6_lCx1X0UlRuxpgulL3trFgzRAvgI1-aSRojJJWUMChXOl9yRSmsOLoHrdmOVDh8gVeUop5T3_VzU/s256/1000198120.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

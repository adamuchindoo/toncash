<template>
    <div>
      <h1>Welcome to Our Website</h1>
      <button @click="getUserId">Get Telegram User ID</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TelegramAuth',
    methods: {
      getUserId() {
        const user = window.Telegram.WebApp.initDataUnsafe.user;
        if (user) {
          alert('Your Telegram User ID is: ' + user.id);
          this.sendUserIdToServer(user.id);
        } else {
          alert('No user information available.');
        }
      },
      sendUserIdToServer(userId) {
        fetch('/save-user-id', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId })
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
    },
    mounted() {
      window.Telegram.WebApp.ready();
    }
  }
  </script>
  
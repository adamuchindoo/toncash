<template>
    <div>
      <button @click="explodeConfetti">Explode Confetti</button>
      <div v-if="showConfetti" class="confetti-container">
        <div v-for="(confetti, index) in confettis" :key="index" class="confetti" :style="confetti.style"></div>
      </div>
    </div>
    <celebrate/>

  </template>
  
  <script>
  export default {
    data() {
      return {
        showConfetti: false,
        confettis: [],
      };
    },
    methods: {
      explodeConfetti() {
        this.showConfetti = true;
        for (let i = 0; i < 100; i++) {
          this.confettis.push({
            style: {
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              transform: `rotate(${Math.random() * 360}deg)`,
              backgroundColor: this.getRandomColor(),
            },
          });
        }
        setTimeout(() => {
          this.confettis = [];
          this.showConfetti = false;
        }, 3000); // Clear confettis after 3 seconds
      },
      getRandomColor() {
        const colors = ['#f44336', '#2196f3', '#4caf50', '#ffeb3b', '#9c27b0'];
        return colors[Math.floor(Math.random() * colors.length)];
      },
    },
  };
  </script>
  
  <style scoped>
  .confetti-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    pointer-events: none;
  }
  
  .confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    pointer-events: none;
    animation: confetti-fall 3s ease-out infinite;
  }
  
  @keyframes confetti-fall {
    0% {
      transform: translateY(-100vh) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(1080deg);
      opacity: 0;
    }
  }
  </style>
  
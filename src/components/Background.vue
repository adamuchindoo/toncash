<template>
      <div class="containerx" ref="starContainer"></div>
</template>

<script>
export default {
  name: 'TwinklingStars',
  mounted() {
    this.createStars();
  },
  methods: {
    createStars() {
      const container = this.$refs.starContainer;
      const numberOfStars = 100;

      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 1 + 1.5}s`;
        container.appendChild(star);
      }
    }
  }
}
</script>

<style  >
 @keyframes twinkle {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; }
    }

    .star {
  width: 3px; /* Increased size */
  height: 3px; /* Increased size */
  background: rgb(28, 10, 194);
  position: absolute;
  animation: twinkle 1.5s infinite ease-in-out;
  opacity: 0.8; /* Ensure stars are visible */
}

    .containerx {
      position: relative;
      width: 100vw;
      height: 100vh;
      background: rgb(189, 103, 103);
      overflow: hidden;
    }
</style>
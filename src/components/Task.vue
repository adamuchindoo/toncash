<template>
    <div>
      <div style="height: 200px;"></div>
      <div id="app" @click="showImage($event)">
        <button @click="toggleAnimation" class="text-white">
          <i class="fas fa-egg"></i> <span id='toggleText'>{{ xx }}</span>
        </button>
        <div v-for="(image, index) in images" :key="index" class="animated" :style="{ top: image.posY + 'px', left: image.posX + 'px' }">
          <img :src="image.src" class="anim" v-if="image.isAnimating">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        xx: "a2c test",
        images: []
      };
    },
    methods: {
      showImage(event) {
        const posX = event.pageX;
        const posY = event.pageY;
  
        // Add new image to images array
        this.images.push({
          src: "https://i.ibb.co/BsDMxXf/cash-icon.png", // Replace with actual image path
          posX: posX,
          posY: posY,
          isAnimating: true
        });
  
        // Reset animation after a short delay
        setTimeout(() => {
          this.images.forEach((image, index) => {
            if (index === this.images.length - 1) {
              image.isAnimating = false; // Only reset the last added image
            }
          });
        }, 1500); // Adjust this timeout to match your animation duration
      },
      toggleAnimation() {
        // Method for toggling animation or other functionality if needed
        // Example: toggling xx variable
        this.xx = this.xx === "a2c test" ? "another value" : "a2c test";
      }
    }
  };
  </script>
  
  <style scoped>
  .flier {
    /* Ensure the container has sufficient space to show the image */
    height: 200px;
    overflow: hidden;
  }
  
  .anim {
    /* Add any styles necessary for your image */
    width: 100px; /* Adjust size as needed */
    height: auto;
  }
  
  .animated {
    position: absolute;
    animation: moveUp 1s ease forwards;
  }
  
  @keyframes moveUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-200px);
      opacity: 0; /* Fade out at the end of animation */
    }
  }
  </style>
  
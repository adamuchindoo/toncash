<template>
  
      <div class="flex justify-center">
       task section
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
        const newImage = {
          src: "https://i.ibb.co/BsDMxXf/cash-icon.png", // Replace with actual image path
          posX: posX,
          posY: posY,
          isAnimating: true
        };
        this.images.push(newImage);
  
        // Reset animation for this specific image after a short delay
        setTimeout(() => {
          newImage.isAnimating = false;
        }, 1000); // Adjust this timeout to match your animation duration
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
      transform: translateY(-100px);
      opacity: 0; /* Fade out at the end of animation */
    }
  }
  </style>
  
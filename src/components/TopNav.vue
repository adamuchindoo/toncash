<template>
      <div class="fixed top-0 left-0 right-0 p-4">
    <div class="bg-[#000] p-4 m-4 border rounded-lg shadow-lg border-none">
      <div class="text-center text-gray-600 text-[13px]">Your TONCASH Tokens</div>
      <p class="mb-2 text-white text-center font-bold text-[22px]" >2,100,200.00 <span class="text-green-300">TONCASH</span></p>
    </div>
    <div class="text-center text-[15px]">
      Tap, tap, tap! Can't pause, won't nap!<br> Time to refill, but the thrill won't cap!
    </div>
    <div class="grid grid-cols-2 divide-x mt-4">
  <div class="bg-green-500/20 m-1 rounded-lg p-2 drop-shadow-md text-center">200 taps left</div>
  <div class=" bg-green-500/20 m-1 rounded-lg p-2 drop-shadow-md text-center">
    <font-awesome-icon :icon="['fas', 'clock']" class="text-green-500"/>
    04:45:43</div>
  
</div>

    <div class="flex justify-center mt-2 " style="margin-top: 10%;" >
      
      <img src="./img/toncash.png" class="w-[250px]" @click="vibrateOnClick($event)" :class="{'effect': effectApplied}"/>
      <div v-for="(image, index) in images" :key="index" class="animated " :style="{ top: image.posY + 'px', left: image.posX + 'px' }">
        <img :src="image.src" class="anim" v-if="image.isAnimating">
      </div>
    </div>

    <div class="bg-green-500/20 p-4 rounded-md mt-4 grid grid-cols-6" style="margin-top: 10%;">
      <div class="col-span-3 text-white mr-1 text-[15px] ">Need more taps? <br> Expand your team!!!</div>
  <div class="p-2 bg-green-500 text-center rounded-md mr-2 text-white  col-span-2">Invite</div>
  <div class="p-2 bg-green-500/20 text-center rounded-md ">
    <font-awesome-icon :icon="['fas', 'share-from-square']" />
  </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isShaking: false,
      effectApplied: false,
      images: []
    };
  },
  methods: {
    vibrateOnClick(event) {
      this.effectApplied = true;
      this.showImage(event);
      if ("vibrate" in navigator) {
        navigator.vibrate([50, 25, 50, 25, 50]);
      } else {
        console.warn("Vibration API not supported.");
      }

      setTimeout(() => {
        this.effectApplied = false;
      }, 500);
    },
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>
showImage(event) {
        const posX = event.pageX;
        const posY = event.pageY;
  
        // Add new image to images array
        const newImage = {
          src: "https://i.ibb.co/BsDMxXf/cash-icon.png", // Replace with actual image path
          posX: posX-40,
          posY: posY-60,
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
    },
   
}
</script>

<style  scoped>
.effect {
  animation: shake 0.05s; /* Reduce the duration to 0.05s for a faster shake */
}

@keyframes shake {
  0% { transform: scale(1); }
  25% { transform: scale(1.05); }
  50% { transform: scale(1); }
  75% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

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
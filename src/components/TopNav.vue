<template>
        <div v-if="showConfetti" class="confetti-container">
        <div v-for="(confetti, index) in confettis" :key="index" class="confetti" :style="confetti.style"></div>
      </div>
      <div class="fixed top-0 left-0 right-0 p-4">
    <div class="bg-[#000] p-4 m-4 border rounded-lg shadow-lg border-none">
      <div class="text-center text-gray-600 text-[13px]">Your TONCASH Tokens</div>
      <p class="mb-2 text-white text-center font-bold text-[22px]" >2,100,200.00 <span class="text-green-300">TONCASH</span></p>
    </div>
    <div class="text-center text-[15px]">
      Tap, tap, tap! Can't pause, won't nap!<br> Time to refill, but the thrill won't cap!
    </div>
    <div class="grid grid-cols-2 divide-x mt-4">
  <div class="bg-green-500/20 m-1 rounded-lg p-2 drop-shadow-md text-center">{{numberOfTaps}} taps left</div>
  <div class=" bg-green-500/20 m-1 rounded-lg p-2 drop-shadow-md text-center">
    <font-awesome-icon :icon="['fas', 'clock']" class="text-green-500"/>
    04:45:43</div>
  
</div>
    
      <div v-if="numberOfTaps<1" class="flex justify-center mt-2 " style="margin-top: 10%;" >
      <img src="./img/toncash.png" class="w-[250px]"/>
    </div>
    
    <div v-if="numberOfTaps>0" class="flex justify-center mt-2 " style="margin-top: 10%;" >
      <img src="./img/toncash.png" class="w-[250px]"  @click="vibrateOnClick($event)" :class="{'effect': effectApplied}"/>
      <div v-for="(image, index) in images" :key="index" class="animated " :style="{ top: image.posY + 'px', left: image.posX + 'px' }">
        <img :src="image.src" class="anim" v-if="image.isAnimating">
      </div>
    </div>

    <div v-if="numberOfTaps<1 && numberOfClaim <1" class="bg-green-500/20 p-4 rounded-md mt-4 grid grid-cols-6" style="margin-top: 10%;">
      <div class="col-span-3 text-white mr-1 text-[15px] ">Need more taps? <br> Expand your team!!!</div>
  <div class="p-2 bg-green-500 text-center rounded-md mr-2 text-white  col-span-2">Invite</div>
  <div class="p-2 bg-green-500/20 text-center rounded-md ">
    <font-awesome-icon :icon="['fas', 'share-from-square']" />
  </div>
    </div>
    <div v-if="numberOfTaps>0 || numberOfClaim>0" class="bg-green-500/20 p-3 rounded-md mt-4 grid grid-cols-6" style="margin-top: 10%;">
      <div class="col-span-4 text-white mr-1 text-[15px] pt-2 font-bold">{{numberOfClaim}} <span class="text-green-300">TONCASH</span></div>


   <div v-if="numberOfClaim>0" @click="letCelebrate" class="p-2 bg-gradient-to-r from-green-500 from-10% via-black/10 via-30% to-emerald-600 to-90% text-center rounded-md col-span-2 text-white cursor-pointer">
    Claim
  </div>
  <div v-if="numberOfClaim<1" class="p-2 bg-gradient-to-r from-gray-500 from-10% via-gray-500 via-30% to-gray-500 to-90% text-center rounded-md col-span-2 text-gray-300 cursor-pointer">
    Claim
  </div>
    </div>


  </div>
  <div v-if="celebrate==true" class="bg-black/50 fixed top-0 left-0 h-screen w-screen content-center p-5">
    <div class="bg-black p-4 rounded-md text-center drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" >
      <font-awesome-icon :icon="['fas', 'champagne-glasses']" class="size-10 text-green-500" />
      <p>Woo hoo! </p>
      <span class="text-[20px] pt-2 font-bold">+{{ _numberOfClaim }} </span>
      <span class="text-green-300 text-[20px] pt-2 font-bold"> TONCASH</span><br>
      <span class="text-gray-400 text-[14px]">Keep shining bright, persevere through challenges, and always discover the silver lining in every cloud. <br> Get more </span>
      <br>
      <div @click="getMore" class="mt-2 p-2 bg-gradient-to-r from-green-600 from-10% via-green-300 via-30% to-emerald-600 to-90% text-center rounded-md col-span-2 text-white cursor-pointer">
    More!!!
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
      images: [],
      numberOfTaps:50,
      numberOfClaim:0,
      celebrate:false,
      showConfetti: false,
      confettis: [],
      _numberOfClaim:0
    };
  },
  methods: {
    letCelebrate(event){
      this.celebrate=true;
      this._numberOfClaim=this.numberOfClaim;
      this.numberOfClaim=0;
      this.explodeConfetti()
    },
    getMore(){
      this.celebrate=false;
     
    },
    vibrateOnClick(event) {
      this.effectApplied = true;
      this.showImage(event);
      this.ontap();
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
        const newImage = {
          src: "https://i.ibb.co/BsDMxXf/cash-icon.png",
          posX: posX-40,
          posY: posY-60,
          isAnimating: true
        };
        this.images.push(newImage);
        setTimeout(() => {
          newImage.isAnimating = false;
        }, 1000); 
      },
      toggleAnimation() {
        this.xx = this.xx === "a2c test" ? "another value" : "a2c test";
      },
      ontap(){
        if(this.numberOfTaps>0){
          this.numberOfTaps-=1;
          this.numberOfClaim+=1;
        }
        
      },
      //>>>>>>>>>>>>>>>>>>>>>>>>>
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
        }, 3000);
      },
      getRandomColor() {
        const colors = ['#f44336', '#2196f3', '#4caf50', '#ffeb3b', '#9c27b0'];
        return colors[Math.floor(Math.random() * colors.length)];
      },
    },
   
}
</script>

<style  scoped>
.effect {
  animation: shake 0.05s;
}

@keyframes shake {
  0% { transform: scale(1); }
  25% { transform: scale(1.05); }
  50% { transform: scale(1); }
  75% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.flier {
    height: 200px;
    overflow: hidden;
  }
  
  .anim {
    width: 100px;
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
      opacity: 0;
    }
  }

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
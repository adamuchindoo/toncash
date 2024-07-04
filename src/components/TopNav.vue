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

    <div class="flex justify-center mt-2" style="margin-top: 10%;">
      <img src="./img/toncash.png" class="w-[250px]" @click="vibrateOnClick"/>
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
  methods: {
    vibrateOnClick() {
      if ("vibrate" in navigator) {
        navigator.vibrate(200); // Vibrate for 200ms
      } else {
        console.warn("Vibration API not supported.");
      }
    }
}}
</script>

<style lang="scss" scoped>

</style>
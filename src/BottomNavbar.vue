<template>
   
    <div class="h-screen bg-gradient-to-b from-black via-green-800 to-black  w-full">
     
      <div class="text-gray-200">
        <component :is="activeComp">
        
        </component>
      </div>

        <nav class="fixed left-0 w-full " id="nav" style="bottom: 3%;">
      <div class="flex justify-around items-center h-16">
        <div id="tapbutton" 
        class="rounded-md p-3 pr-5 pl-5 bg-gray-700/50 hover:border-2 border-green-500/75"
        @click="changeColor(1)">
          <a 
          href="#"
          id="tap_icon"
          class="text-green-800 hover:text-green-500 active:text-gold flex flex-col items-center"
          >
          <font-awesome-icon :icon="['fas', 'hand-point-up']" class="h-6 w-6 mb-1" />
          <span class="text-xs">Tap</span>
         
        </a>
        </div>
        <div id="taskbutton" class="rounded-md  bg-gray-700/50 p-3 pr-5 pl-5  hover:border-2 border-green-500/75"
        @click="changeColor(2)">
          <a 
          href="#" 
          id="task_icon"
          class="text-green-800 hover:text-green-500  active:text-gold flex flex-col items-center"
         >
          <font-awesome-icon :icon="['fas', 'list-check']" class="h-6 w-6 mb-1" />
          <span class="text-xs">Task</span>
          
        </a>
        </div>
        <div id="farmbutton" class="rounded-md  bg-gray-700/50 p-3 pr-5 pl-5  hover:border-2 border-green-500/75"
        @click="changeColor(3)">

        <a 
          href="#" 
          id="farm_icon"
          class="text-green-800 hover:text-green-500 active:text-gold flex flex-col items-center"
          @mousedown="toggleClick($event)" 
          @mouseup="toggleClick($event)">
          <font-awesome-icon :icon="['fab', 'canadian-maple-leaf']" class="h-6 w-6 mb-1" />
          <span class="text-xs">Farm</span>
        
        </a></div>
        <div
        id="teambutton"
        class="rounded-md  bg-gray-700/50 p-3 pr-5 pl-5 hover:border-2 border-green-500/75"
        @click="changeColor(4)">
        
        <a 
          href="#" 
          id="team_icon"
          class="text-green-800 hover:text-green-500 active:text-gold flex flex-col items-center"
          @mousedown="toggleClick($event)" 
          @mouseup="toggleClick($event)">
          <font-awesome-icon :icon="['fas', 'users']" class="h-6 w-6 mb-1" />
          <span class="text-xs">Team</span>
        </a></div>
      </div>
    </nav>
    </div>

  </template>
  
  <script>
    export default {
    name: 'BottomNavbar',
    data() {
      return {
        tapbutton: 'bg-gray-500',
        tap_icon:'',
        taskbutton:'',
        task_icon:'',
        farmbutton:'',
        farm_icon:'',
        teambutton:'',
        team_icon:'',
         activeComp: 'tap'
      };
    },
    methods: {
      changeColor(boxNumber) {
        const tapbutton = document.getElementById('tapbutton');
        const taskbutton = document.getElementById('taskbutton');
        const farmbutton=document.getElementById('farmbutton');
        const teambutton=document.getElementById('teambutton');
        var activeComp;
      if (boxNumber === 1) {
        tapbutton.classList.add('border-2');
        tap_icon.classList.add('text-green-500');

        taskbutton.classList.remove('border-2');
        task_icon.classList.remove('text-green-500');
        farmbutton.classList.remove('border-2');
        farm_icon.classList.remove('text-green-500');
        teambutton.classList.remove('border-2');
        team_icon.classList.remove('text-green-500');
        activeComp = this.activeComp='tap';
      }else if (boxNumber === 2){
        taskbutton.classList.add('border-2');
        task_icon.classList.add('text-green-500')

        tap_icon.classList.remove('text-green-500')
        tapbutton.classList.remove('border-2');
        farmbutton.classList.remove('border-2');
        farm_icon.classList.remove('text-green-500');
        teambutton.classList.remove('border-2');
        team_icon.classList.remove('text-green-500');

        activeComp = this.activeComp='task';
        
      }else if (boxNumber === 3){
        farmbutton.classList.add('border-2');
        farm_icon.classList.add('text-green-500')

        tap_icon.classList.remove('text-green-500')
        tapbutton.classList.remove('border-2');
        taskbutton.classList.remove('border-2');
        task_icon.classList.remove('text-green-500');
        teambutton.classList.remove('border-2');
        team_icon.classList.remove('text-green-500');

      }else if(boxNumber===4){
        teambutton.classList.add('border-2');
        team_icon.classList.add('text-green-500');

        farmbutton.classList.remove('border-2');
        farm_icon.classList.remove('text-green-500')
        tap_icon.classList.remove('text-green-500')
        tapbutton.classList.remove('border-2');
        taskbutton.classList.remove('border-2');
        task_icon.classList.remove('text-green-500');
      } 
      }
    }
  };
 
  </script>
  
  <style scoped>
  /* Additional custom styles can go here */
  </style>
  
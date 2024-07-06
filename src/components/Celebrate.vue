<template>
    <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-80">
        <div class="flex justify-end">
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  /* No specific styles needed here with Tailwind CSS */
  </style>
  
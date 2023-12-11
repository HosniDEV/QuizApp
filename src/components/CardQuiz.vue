<template>
  <div
    class="border rounded-md overflow-hidden bg-white shadow-md hover hover:scale-105 transition-transform filter hover:filter-none drop-shadow-xl duration-1000"
  >
    <img :src="props.quiz.url" alt="" class="w-full object-cover h-[30vh]" />
    <div class="my-2 mx-2">
      <h1 class="text-lg font-bold uppercase">{{ props.quiz.title }}</h1>
      <small class="text-sm font-semibold text-gray-400"
        >{{ props.quiz.quizes.length }} Questions</small
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  quiz: Object,
});
</script>

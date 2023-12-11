<template>
  <div class="h-screen w-full grid place-content-center">
    <div
      class="p-10 border rounded-md space-y-3 shadow-md hover:scale-125 transition-transform"
    >
      <h1 class="text-lg uppercase font-medium">your result is</h1>
      <h2 class="text-center text-5xl font-bold text-red-500">
        {{ props.correctAnswers + "/" + props.length }}
      </h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["correctAnswers", "length"]);
</script>

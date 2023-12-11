<template>
  <div>
    <header class="flex space-x-4 items-center bg-slate-200 p-3">
      <h1 class="text-lg font-semibold">Quiz</h1>

      <input
        type="text"
        placeholder="search"
        class="py-1 px-3 focus:outline-none border border-collapse w-96"
        @input="emit('update:modelValue', $event.target.value)"
      />
    </header>
  </div>
</template>

<script setup>
defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>

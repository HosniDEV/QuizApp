<template>
  <div>
    <h1 class="border rounded-md px-3 py-1 bg-white text-lg font-semibold mt-2">
      {{ question.question }}
    </h1>
    <div class="ml-4 mt-4 space-y-3">
      <h1
        v-for="(suggestion, index) in question.suggestions"
        :key="index"
        class="border rounded-md px-3 py-1 bg-white text-base font-normal hover:bg-slate-50"
        @click="nextQst(suggestion.iscorrect)"
      >
        <h1>{{ suggestion.qst }}</h1>
      </h1>
    </div>
  </div>
</template>

<script setup>
defineProps(["question"]);
const emit = defineEmits(["nextQuestion"]);
const nextQst = (iscorrect) => {
  emit("nextQuestion", iscorrect);
};
</script>

<template>
  <div class="h-[100vh] p-4 grid place-content-center">
    <div class="space-y-2 mb-4" v-if="!isResult">
      <h1 class="text-sm font-semibold tracking-wider">{{ len }} questions</h1>

      <div class="w-[150px] h-4 border rounded-full overflow-hidden">
        <div
          class="bg-blue-300 h-full transition-colorss"
          :style="{ width: barPercent }"
        ></div>
      </div>
    </div>
    <div
      v-if="data"
      class="sm:w-[400px]"
      :class="{ 'border-collapse p-10 rounded-md border': !isResult }"
    >
      <Quiz
        v-if="!isResult"
        :question="data.quizes[currentQuestion]"
        @nextQuestion="nextQst"
      ></Quiz>
      <ResultQuiz
        v-else
        :length="data.quizes.length"
        :correctAnswers="istheQstCorrect"
      />
    </div>
    <div v-else><PageNotFound /></div>
  </div>
</template>

<script setup>
import PageNotFound from "@/views/PageNotFound.vue";
import ResultQuiz from "@/components/ResultQuiz.vue";
import Quiz from "@/components/Quiz.vue";
import { useRoute } from "vue-router";
import quizes from "@/lists.json";
import { ref, computed } from "vue";

const route = useRoute();
var currentQuestion = ref(0);
const istheQstCorrect = ref(0);
const isResult = ref(false);
var data = quizes.find((quiz) => quiz.id == route.params.id);

const len = computed(() => {
  return `${currentQuestion.value}/${data.quizes.length}`;
});
const barPercent = computed(() => {
  return `${(currentQuestion.value / data.quizes.length) * 100}%`;
});
const nextQst = (iscorrect) => {
  if (iscorrect) {
    istheQstCorrect.value++;
  }
  if (currentQuestion.value < data.quizes.length) {
    currentQuestion.value++;
  }
  if (currentQuestion.value == data.quizes.length) {
    isResult.value = true;
  }
};
</script>

<script setup>
import CardQuizVue from "@/components/CardQuiz.vue";
import SearchQuiz from "@/components/SearchQuiz.vue";
import { RouterLink } from "vue-router";
import lists from "@/lists.json";
import { ref, watch } from "vue";
const search = ref("");
var quizes = ref(lists);
watch(search, () => {
  quizes.value = lists.filter((quiz) =>
    quiz.title.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <main class="max-w-4xl m-auto">
    <SearchQuiz v-model="search" />
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 px-2">
      <RouterLink
        v-for="quiz in quizes"
        :key="quiz.id"
        :to="`/quiz/${quiz.id}`"
      >
        <CardQuizVue :quiz="quiz" />
      </RouterLink>
    </div>
  </main>
</template>

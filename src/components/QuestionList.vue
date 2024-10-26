<template>
  <div>
    <div v-for="(questions, difficulty) in groupedQuestions" :key="difficulty">
      <h2>{{ difficulty.charAt(0).toUpperCase() + difficulty.slice(1) }}</h2>
      <div class="question-grid">
        <question-card
          v-for="question in questions"
          :key="question.id"
          :question="question"
        >
          <div class="question-card-wrapper">
          </div>
        </question-card>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCard from './QuestionCard.vue';

export default {
  name: 'QuestionList',
  components: {
    QuestionCard
  },
  props: {
    groupedQuestions: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.question-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.question-card-wrapper {
  cursor: pointer;
  height: 100%;
  width: 100%;
}
</style>

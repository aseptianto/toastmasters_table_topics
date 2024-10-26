<template>
  <div class="question-card" :class="{ 'read': question.read }" @click="navigateToQuestion(question.id)">
    <h3 :class="{ 'strikethrough': question.read }">Question {{ question.id }}</h3>
  </div>
</template>

<script>
export default {
  name: 'QuestionCard',
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  methods: {
    navigateToQuestion(questionId) {
      this.$router.push(`/question/${questionId}`);
      this.$store.dispatch('markQuestionAsRead', parseInt(questionId));
    }
  }
}
</script>

<style scoped>
.question-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.question-card:hover {
  background-color: #f0f0f0;
}

.question-card.read {
  background-color: #04d604;
}

.strikethrough {
  text-decoration: line-through;
}
</style>

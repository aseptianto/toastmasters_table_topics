<template>
  <div v-if="question" class="question-detail">
    <h1>Question {{ question.id }}</h1>
    <p class="content">{{ question.content }}</p>
    <button @click="$router.push('/')" class="back-button">Back to Main Page</button>
  </div>
</template>

<script>
export default {
  name: 'QuestionDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    question() {
      return this.$store.state.questions.find(q => q.id === parseInt(this.id));
    }
  },
}
</script>

<style scoped>
.question-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.difficulty {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.content {
  font-size: 1.8rem;
  line-height: 1.5;
  margin-bottom: 30px;
}

.back-button {
  font-size: 1.2rem;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #45a049;
}
</style>

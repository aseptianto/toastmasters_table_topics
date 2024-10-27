<template>
  <div>
    <h1>Table Topics Questions</h1>
    <h2>Theme: Lifelong Learning</h2>
    <h3>Word of The Day: Curiosity</h3>
    <h3>n. A strong desire to learn or know something</h3>
    <h3>"Her curiosity about the stars led her to pursue a career in astronomy."</h3>
    <question-list :groupedQuestions="groupedQuestions" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import QuestionList from '@/components/QuestionList.vue';

export default {
  name: 'MainPage',
  components: {
    QuestionList
  },
  computed: {
    ...mapGetters(['groupedQuestions'])
  },
  created() {
    this.$store.dispatch('initializeQuestions');
  }
}
</script>


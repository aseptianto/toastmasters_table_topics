<template>
  <div>
    <h1>Table Topics Questions</h1>
    <h2>Theme: Lifelong Learning</h2>
    <h3>Word of The Day: </h3>
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


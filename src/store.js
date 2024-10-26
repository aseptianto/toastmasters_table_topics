import Vue from 'vue';
import Vuex from 'vuex';
import questionsData from './assets/questions.json';

Vue.use(Vuex);

// Define the initial state as a function
const initialState = () => {
  return {
    questions: [],
  }
}

const store = new Vuex.Store({
  state: initialState,
  mutations: {
    setQuestions(state, questions) {
      state.questions = questions;
    },
    markQuestionAsRead(state, questionId) {
      const question = state.questions.find(q => q.id === questionId);
      if (question) {
        question.read = true;
      }
    },
    RESET_STATE(state) {
      Object.assign(state, initialState())
    }
  },
  actions: {
    initializeQuestions({ commit }) {
      const storedQuestions = sessionStorage.getItem('questions');
      if (storedQuestions) {
        commit('setQuestions', JSON.parse(storedQuestions));
      } else {
        commit('setQuestions', questionsData);
        sessionStorage.setItem('questions', JSON.stringify(questionsData));
      }
    },
    markQuestionAsRead({ commit, state }, questionId) {
      commit('markQuestionAsRead', questionId);
      sessionStorage.setItem('questions', JSON.stringify(state.questions));
    },
    resetState({ commit }) {
      commit('RESET_STATE');
      sessionStorage.setItem('questions', JSON.stringify(questionsData));
    }
  },
  getters: {
    groupedQuestions: (state) => {
      return state.questions.reduce((acc, question) => {
        if (!acc[question.difficulty]) {
          acc[question.difficulty] = [];
        }
        acc[question.difficulty].push(question);
        return acc;
      }, {});
    }
  }
});

export default store;

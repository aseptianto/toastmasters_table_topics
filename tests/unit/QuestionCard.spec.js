import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import QuestionCard from '@/components/QuestionCard.vue'
import { createStore } from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe('QuestionCard.vue', () => {
  let store
  let router

  beforeEach(() => {
    const mockDispatch = jest.fn()
    store = new Vuex.Store({
      actions: {
        markQuestionAsRead: jest.fn(),
        markQuestionAsRead: mockDispatch
      }
    })

    router = new VueRouter()
  })

  it('renders question card correctly', () => {
    const question = { id: 1, read: false }
    const wrapper = shallowMount(QuestionCard, {
      propsData: { question },
      localVue,
      store,
      router
    })

    expect(wrapper.find('h3').text()).toBe('Question 1')
    expect(wrapper.classes()).not.toContain('read')
    expect(wrapper.find('h3').classes()).not.toContain('strikethrough')
  })

  it('applies correct classes for read questions', () => {
    const question = { id: 2, read: true }
    const wrapper = shallowMount(QuestionCard, {
      propsData: { question },
      localVue,
      store,
      router
    })

    expect(wrapper.classes()).toContain('read')
    expect(wrapper.find('h3').classes()).toContain('strikethrough')
  })
})

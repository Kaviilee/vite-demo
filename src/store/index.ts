import { createStore } from 'vuex';

export const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    SET_COUNT: (state) => {
      state.count++;
    },
  },
  getters: {
    count: (state) => state.count,
  },
  actions: {
    increment: ({ commit }) => commit('SET_COUNT'),
  },
});

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const apiUrl = process.env.VUE_APP_POKEAPI

export default new Vuex.Store({
  state: {
    generations: [],
    generation: {
      id: 0,
      name: '',
      abilities: [],
      main_region: {
        name: ''
      },
      moves: [],
      pokemon_species: []
    }
  },
  mutations: {
    updateGenerations (state, data) {
      state.generations = data;
    },
    updateGeneration (state, data) {
      state.generation = data;
    }
  },
  actions: {
    async listGenerations (context) {
      await axios.get(`${apiUrl}/generation`).then(response => {
        context.commit('updateGenerations', response.data.results);
      })
    },
    async showGeneration (context, id) {
      await axios.get(`${apiUrl}/generation/${id}`).then(response => {
        context.commit('updateGeneration', response.data);
      })
    },
    async showPokemon (context, name) {
      return await axios.get(`${apiUrl}/pokemon/${name}`).then(response => {
        return response.data;
      })
    }
  }
})
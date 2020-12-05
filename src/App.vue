<template>
  <div id="app">
    <h1 class="title">Pokemon Generations</h1>
    <div class="generation-buttons">
      <button 
        v-for="(generation, key) in generations"
        :key="key"
        @click="loadGeneration(key+1)"
        :class="selectedGeneration == key+1 ? 'active' : ''"
      >
        {{ generation.name | generation }}
      </button>
    </div>  
    <GenerationHeader class="generation-header" :generationId="selectedGeneration"/>
    <PokeList :pokemonIds="getPokemonIds()" class="poke-list"/>
  </div>
</template>

<script>
  import GenerationHeader from './components/GenerationHeader.vue'
  import PokeList from './components/PokeList.vue'

  export default {
    name: 'App',
    components: {
      GenerationHeader,
      PokeList
    },
    data: function () {
      return {
        generations: [],
        selectedGeneration: 1
      }
    },
    created: async function () {
      await this.$store.dispatch('listGenerations');
      this.generations = await this.$store.state.generations;
      await this.loadGeneration(1);
    },
    methods: {
      loadGeneration: function (id) {
        this.selectedGeneration = id;
        this.$store.dispatch('showGeneration', id);
      },
      getPokemonIds: function () {
        return this.$store.state.generation.pokemon_species.map(pokemon => Number(pokemon.url.split('/')[6])).sort((a,b) => a-b);
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@500&family=Nunito+Sans&display=swap');
  
  body {
    padding-top: 20px;
    background-color: #d1d1e0;
  }
  
  #app {
    font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #15151e;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-around;
  }

  .title {
    font-family: 'Cabin', Helvetica, Arial, sans-serif;
    font-size: 2.5rem;
    color: #676798;
    padding-bottom: 20px;
    margin: 0 auto;
    max-width: 90%;
  }

  .generation-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
  }


  .generation-buttons button {
    border: 1px solid #676798;
    border-radius: 5px;
    font-size: 1.0rem;
    height: 40px;
    background-color: #a4a4c1;
    outline: none;
    flex: 1 1 auto;
    margin: 5px;
  }
  
  .generation-buttons button:hover {
    background-color: #676798;
    cursor: pointer;
  }
  
  .generation-buttons button:focus {
    background-color: #676798;
    cursor: pointer;
    color: whitesmoke;
  }
  .active {
    background-color: #676798 !important;
    color: whitesmoke;
  }
</style>

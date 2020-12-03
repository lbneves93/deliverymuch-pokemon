<template>
  <div id="app">
    <h1 class="title">Pokemon Generations</h1>
    <div class="fields">
      <select 
        v-model="selectedGeneration"
        @change="loadGeneration()"
      >
        <option disabled value="">Selecione uma geração...</option>
        <option 
          v-for="(generation, key) in generations" 
          :key="key"
          :value="key+1"
        >
          {{ generation.name }}
        </option>
      </select>
      <GenerationHeader class="generation-header" :generationId="selectedGeneration"/>
      <input v-model="search" type="text" placeholder="Pesquisar...">
    </div>
    <div class="generation-data">
      <PokeList class="poke-list"/>
    </div>
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
        selectedGeneration: 1,
        search: ''
      }
    },
    mounted: async function () {
      await this.$store.dispatch('listGenerations');
      this.generations = await this.$store.state.generations;
      this.loadGeneration();
    },
    methods: {
      loadGeneration: function () {
        this.$store.dispatch('showGeneration', this.selectedGeneration);
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
    justify-content: space-between;
  }

  .title {
    font-family: 'Cabin', Helvetica, Arial, sans-serif;
    font-size: 2.5rem;
    color: #676798;
    padding-bottom: 20px;
  }

  .fields {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    justify-content: space-around;
  }

  .fields select {
    flex: 1;
    height: 30px;
    border: 1px solid #9595b7;
    border-radius: 5%;
    box-shadow: 0 0 5px #9595b7;
    margin-right: 50px;
  }

  .fields input {
    flex: 1;
    border: 1px solid #9595b7;
    border-radius: 5%;
    outline: none;
    box-shadow: 0 0 5px #9595b7;
    margin-left: 50px;
  }

  .generation-data {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }
</style>

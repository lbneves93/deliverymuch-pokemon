<template>
  <div id="app">
    <h1 class="title">Pokemon Generations</h1>
    <div class="fields">
      <select v-model="selectedGeneration">
        <option disabled value="">Selecione uma geração...</option>
        <option 
          v-for="generation in generations" 
          :key="generation.id"
          v-bind:value="generation.id"
        >
          {{ generation.name }}
        </option>
      </select>
      
      <input v-model="search" type="text" placeholder="Pesquisar...">
    </div>
    <div class="generation-data">
      <GenerationHeader class="generation-header" :generationId="selectedGeneration"/>
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
        generations: [{ id: 1, name: 'Generation 1' }, { id: 2, name: 'Generation 2' }, { id: 3, name: 'Generation 3' }],
        selectedGeneration: 0,
        search: ''
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
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    justify-content: space-between;
  }

  .fields select {
    height: 30px;
    border: 1px solid #9595b7;
    border-radius: 5%;
    box-shadow: 0 0 5px #9595b7;
  }

  .fields input {
    border: 1px solid #9595b7;
    border-radius: 5%;
    outline: none;
    box-shadow: 0 0 5px #9595b7;
  }

  .generation-data {
    display: flex;
    flex-wrap: wrap;
    align-items: top;
    justify-content: space-between;
    width: 100%;
  }

  .generation-header {
    flex: 1;
  }

  .poke-list {
    flex: 3;
  }
</style>

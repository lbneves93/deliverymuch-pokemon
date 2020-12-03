<template>
  <fieldset class="generation-header">
    <legend>Generation Information</legend>
    <p>Name: <strong>{{ generation.name }}</strong></p>
    <p>Main Region: <strong>{{ generation.mainRegion }}</strong></p>
    <p>Number of Pokemons: <strong>{{ generation.pokemonsCount }}</strong></p>
    <p>Number of Moves: <strong>{{ generation.movesCount }}</strong></p>
  </fieldset>
</template>

<script>
export default {
  name: 'GenerationHeader',
  props: {
    generationId: Number,
  },
  data: () => {
    return {
      generation: {name: 'Generation 1', mainRegion: 'kanto', pokemonsCount: 32, movesCount: 12 }
    }
  }
}
</script>


<style scoped>
  .generation-header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    max-width: 300px;
    font-size: 1.5rem;
    padding: 20px 20px;
    border: 4px solid #676798;
    border-radius: 5%;
    margin: 60px auto;
  }

  .generation-header legend {
    color: #676798;
    font-family: 'Cabin', Helvetica, Arial, sans-serif;
    font-size: 1.8rem;
  }
  
</style>

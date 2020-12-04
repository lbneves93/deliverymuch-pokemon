<template>
  <fieldset class="generation-header">
    <legend>Generation Information</legend>
    <div class="generation-header-info">
      <p>Name: <strong>{{ generation.name | generation }}</strong></p>
      <p>Main Region: <strong>{{ generation.main_region.name }}</strong></p>
      <p>Number of Pokemons: <strong>{{ generation.pokemon_species.length }}</strong></p>
      <p>Number of Moves: <strong>{{ generation.moves.length }}</strong></p>
      <p>Number of Abilities: <strong>{{ generation.abilities.length }}</strong></p>
    </div>  
  </fieldset>
</template>

<script>
  export default {
    name: 'GenerationHeader',
    computed: {
      generation: {
        get: function () {
          return this.$store.state.generation;
        }
      }
    }
  }
</script>


<style scoped>
  .generation-header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 600px;
    font-size: 1.5rem;
    padding: 20px 20px;
    border: 2px solid #676798;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 40px;
  }

  .generation-header legend {
    color: #676798;
    font-family: 'Cabin', Helvetica, Arial, sans-serif;
    font-size: 1.8rem;
  }

  .generation-header-info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

  }

  .generation-header p {
    flex: 1 0 300px;
    line-height: 1.8rem;
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>

<template>
  <fieldset class="generation-header">
    <legend>Generation Information</legend>
    <div class="generation-header-info">
      <p>Name: <strong>{{ generation.name | generation }}</strong></p>
      <p>Main Region: <strong>{{ generation.main_region.name | capitalize }}</strong></p>
      <p>Pokemons: <strong><IOdometer :value="generation.pokemon_species.length"></IOdometer></strong></p>
      <p>Moves: <strong><IOdometer :value="generation.moves.length"></IOdometer></strong></p>
      <p>Abilities: <strong><IOdometer :value="generation.abilities.length"></IOdometer></strong></p>
      
    </div>  
  </fieldset>
</template>

<script>
  import IOdometer from 'vue-odometer'
  import 'odometer/themes/odometer-theme-default.css';

  export default {
    name: 'GenerationHeader',
    components: {
      IOdometer
    },
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
    width: 1000px;
    font-size: 1.3rem;
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
    width: 100%;
    justify-content: space-around;
  }

  .generation-header p {
    flex: 1 0 auto;
    line-height: 1.8rem;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .odometer.odometer-theme-default {
    font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
  }
</style>

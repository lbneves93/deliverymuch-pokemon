<template>
  <fieldset>
    <legend>Pokemon List</legend>
    <div class="poke-list">
      <PokeCard 
        v-for="pokemon in pokemons" 
        :key="pokemon.name"
        :pokemonName="pokemon.name"
      />
    </div> 
    <div class="pagination">
      <button>Back</button>
      {{ page }}
      <button>Next</button>
    </div>
  </fieldset>
</template>

<script>
  import PokeCard from './PokeCard.vue'

  export default {
    name: 'PokeList',
    components: {
      PokeCard
    },
    data: function () {
      return {
        page: 0
      }
    },
    computed: {
      pokemons: {
        get: function() {
          return this.$store.state.generation.pokemon_species;
        }
      }
    }
  }
</script>


<style scoped>
  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    margin: 30px 20px;
  }
  .poke-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 1.5rem;
    padding: 20px 20px;
    justify-content: center;
  }

  .poke-list legend {
    color: #676798;
    font-family: 'Cabin', Helvetica, Arial, sans-serif;
    font-size: 1.8rem;
  }

  .pagination {
    display: flex;
    justify-content: space-evenly;
    width: 300px;
    font-size: 1.2rem;
  }

  .pagination button {
    cursor: pointer;
    width: 100px;
    background: #9595b7;
    outline: none;
    border: 1px solid #676798;
  }

  .pagination button:hover {
    background-color: #676798;
  }
</style>

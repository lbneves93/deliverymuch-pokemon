<template>
  <fieldset>
    <!-- <legend>Pokemon List</legend> -->
    <div class="poke-list">
      <PokeCard 
        v-for="pokemon in pokemons" 
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </div>
    <scroll-loader :loader-method="nextPage" :loader-disable="page >= totalPokemons / limit">
    </scroll-loader>
    <!-- <div class="pagination">
      <button 
        @click="backPage()"
        :disabled="page == 1"
      >
        Back
      </button>
      {{ page }}
      <button 
        @click="nextPage()"
        :disabled="page >= totalPokemons / limit"
      >
        Next
      </button>
    </div> -->
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
        page: 1,
        limit: 10,
        offset: 0,
        pokemons: []   
      }
    },
    mounted: function () {
      this.paginatedPokemons();
    },
    computed: {
      pokemonIds: function () {
        return this.$store.state.generation.pokemon_species
          .slice(this.offset, this.page * this.limit)
          .map(pokemon => pokemon.url.split('/')[6])
      },
      generation: function() {
        return this.$store.state.generation;
      },
      totalPokemons: function() {
        return this.generation.pokemon_species.length;
      }
    },
    watch: {
      generation: function (newGeneration, oldGeneration) {
        if(newGeneration != oldGeneration) {
          this.page = 1;
          this.offset = 0;
          this.pokemons = [];
          this.paginatedPokemons();
        }
      }
    },
    methods: {
      paginatedPokemons: async function () {
        var newPokemonPage = [];
        var pokemonId;
        for(pokemonId of this.pokemonIds) {
          let newPokemon = await this.$store.dispatch('showPokemon', pokemonId)
          newPokemonPage.push(newPokemon);
        }
        
        this.pokemons = [...this.pokemons, ...newPokemonPage]
      },
      // backPage: function () {
      //   this.offset -= this.limit;
      //   this.page--;
      // },
      nextPage: function () {
        this.offset += this.limit;
        this.page++;
        this.paginatedPokemons();
      }
    }
  }
</script>


<style scoped>
  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    margin: 10px auto;
  }
  .poke-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 1.5rem;
    padding: 10px 20px;
    justify-content: center;
    margin: 0 auto;
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
    height: 30px;
    background-color: #a4a4c1;
    outline: none;
    border: 1px solid #676798;
    border-radius: 5px;
    font-size: 1.0rem;
  }

  .pagination button:hover {
    background-color: #676798;
    color: whitesmoke;
  }
</style>

<template>
  <div class="poke-card">
    <header>
      {{ '#'+pokemon.id }} - {{ pokemon.name | capitalize }}
    </header>
    <div class="pokemon-img">
      <img
        :src="pokemon.sprites.front_default" 
        :alt="pokemon.name"
        width="100%"
        height="100%"
      >
    </div>
    <div class="pokemon-info">
      <p>Ability: <strong>{{ pokemon.abilities.length ? pokemon.abilities[0].ability.name : '---' }}</strong></p>
      <p>Move: <strong>{{ pokemon.moves.length ? pokemon.moves[0].move.name : '---' }}</strong></p>
      <p>Type: <strong>{{ pokemon.types.length ? pokemon.types[0].type.name : '---' }}</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokeCard',
  props: {
    pokemonId: String
  },
  data: () => {
    return {
      pokemon: {
        id: 0,
        sprites: {
          front_default: ''
        },
        abilities: [
          {
            ability: {
              name: ''
            }
          }  
        ],
        moves: [
          {
            move: {
              name: ''
            }
          }  
        ],
        types: [
          {
            type: {
              name: ''
            }
          }  
        ]
      }
    }
  },
  mounted: async function () {
    this.pokemon = await this.$store.dispatch('showPokemon', this.pokemonId);
  }
}
</script>


<style scoped>
  .poke-card {
    flex: 0 1 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    padding-bottom: 20px;
    margin-right: 20px;
    border-left: 1px solid #676798;
    border-right: 1px solid #676798;
    border-radius: 5px;
    margin-top: 30px;
  }

  .poke-card header {
    background: #676798;
    font-size: 1.4rem;
    width: 100%;
    color: whitesmoke;
    font-weight: bold;
  }

  .pokemon-img {
    margin: 0 auto;
    padding: 0;
    width: 150px;
    height: 150px;
  }

  .pokemon-info {
    margin: 0 auto;
    padding: 0;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .pokemon-info p {
    margin: 0;
  }
  
</style>

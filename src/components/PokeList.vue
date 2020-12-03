<template>
  <fieldset>
    <legend>Pokemon List</legend>
    <div class="poke-list">
      <PokeCard key="0"/>
      <PokeCard key="1"/>
      <PokeCard key="3"/>
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
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
    props: {
      generationId: Number,
    },
    data: () => {
      return {
        generation: {name: 'Generation 1', mainRegion: 'kanto', pokemonsCount: 32, movesCount: 12 },
        page: "0"
      }
    }
  }
</script>


<style scoped>
  fieldset {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    border: 4px solid #676798;
    border-radius: 5%;
    margin: 60px auto;
  }
  .poke-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;
    padding: 20px 20px;
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

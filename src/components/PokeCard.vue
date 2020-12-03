<template>
  <div class="poke-card">
    <header>
      001 - Venonat
    </header>
    <div class="pokemon-img">
      <img 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png" 
        alt="venonat"
      >
    </div>
    <div class="pokemon-info">
      <p>Ability: <strong>compound-eyes</strong></p>
      <p>Move: <strong>tackle</strong></p>
      <p>Type: <strong>bug</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokeCard',
  props: {
    
  },
  data: () => {
    return {
      
    }
  }
}
</script>


<style scoped>
  .poke-card {
    width: 200px;
    height: 200px;
    border: 1px solid #676798;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
  }

  .poke-card header {
    background: #676798;
    font-size: 1.0rem;
    width: 100%;
  }

  .pokemon-img {
    margin: 0 auto;
    padding: 0;
    width: 100px;
    height: 100px;
  }

  .pokemon-info {
    margin: 0 auto;
    padding: 0;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .pokemon-info p {
    margin: 0;
  }
  
</style>

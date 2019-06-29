<template>
  <div class="">
    <h2 class="ma-3">felipe costumer</h2>
  </div>
</template>

<script>

  export default {
    data: () => ({
    }),
    props: {
      source: String
    },
    created(){
      this.$http.get(this.$API + '/costumer', {
      }).then(response => {
        console.log(response.data)
      }).catch(error =>{
      })
    }
  }
</script>

<style>

</style>

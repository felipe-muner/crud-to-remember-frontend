<template>
  <!-- <v-container> -->
    <div class="">
      hello home
    </div>
  <!-- </v-container> -->
</template>

<script>

  export default {
    data: () => ({
    }),
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

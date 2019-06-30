<template lang="html">
  <div>
    <v-tooltip top>
      <v-btn @click.native.stop="dialog = true" small color="warning" slot="activator" fab>
        <v-icon>edit</v-icon>
      </v-btn>
      <span>Edit</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>

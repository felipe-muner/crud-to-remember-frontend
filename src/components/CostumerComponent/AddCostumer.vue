<template lang="html">
  <div>
    <v-tooltip top>
      <v-btn @click.native.stop="dialog = true" small color="success" slot="activator" fab>
        <v-icon>add</v-icon>
      </v-btn>
      <span>Add</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>

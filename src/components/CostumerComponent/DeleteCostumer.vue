<template lang="html">
  <div>
    <v-tooltip top>
      <v-btn @click.native.stop="dialog = true" small color="error" slot="activator" fab>
        <v-icon>clear</v-icon>
      </v-btn>
      <span>Delete</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>

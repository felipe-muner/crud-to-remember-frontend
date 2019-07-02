<template lang="html">
  <div class="">
    <v-tooltip top>
      <v-btn @click.native.stop="dialog = true" small color="error" slot="activator" fab>
        <v-icon>clear</v-icon>
      </v-btn>
      <span>Toggle Active</span>
    </v-tooltip>
    <v-dialog class="modalFilter" v-model="dialog" max-width="40%">
      <v-card>
        <v-card-title class="py-0">
          <span>Toggle Active</span>
          <v-spacer></v-spacer>
          <v-menu bottom left>
            <v-btn icon slot="activator" @click.stop="dialog=false">
              <v-icon>close</v-icon>
            </v-btn>
        </v-menu>
        </v-card-title>
        <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs12 class="pt-0">
                {{Costumer}}
                <v-autocomplete
                  label="Costumer"
                  autocomplete
                  required
                  :rules="[v => !!v || 'Item is required']"
                  item-value="ID"
                  item-text="Name"
                  return-object
                  :items="itemsTable"
                  v-model="Costumer"
                ></v-autocomplete>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 class="mt-3">
                <div v-show="Costumer.ID">
                  <div v-if="Costumer && Costumer.Active">
                    <v-tooltip top>
                      <v-btn slot="activator" color="success" @click="toggleActive">Active</v-btn>
                      <span>Click to Inactive</span>
                    </v-tooltip>
                  </div>
                  <div v-else>
                    <v-tooltip top>
                      <v-btn slot="activator" color="error" @click="toggleActive">Inactive</v-btn>
                      <span>Click to Active</span>
                    </v-tooltip>
                  </div>
                </div>
              </v-flex>
            </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  props:['itemsTable'],
  data(){
    return {
      dialog:false,
      valid: true,
      Costumer: {}
    }
  },
  methods:{
    toggleActive() {
      this.$http.put(this.$API + '/costumer/toggle-active', {
        ID: this.Costumer.ID,
        toggleActive: !this.Costumer.Active
      }).then(response => {
        this.Costumer.Active = !this.Costumer.Active
        alert('Activity Edited')
      }).catch(err => {
        alert('Error')
      })
    },
  },
}
</script>

<style lang="css">
</style>

<template>
  <div class="ma-2 mt-3">
    <v-card>
      <v-card-title>
        <AddCostumer/>
        <EditCostumer :itemsTable="itemsTable"/>
        <DeleteCostumer :itemsTable="itemsTable" />
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-bind:headers="header"
        v-bind:items="itemsTable"
        v-bind:search="search"
        :rows-per-page-items="[{text:'All',value:-1},200,100]"
        disable-initial-sort
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>
            <v-layout justify-center>
              {{ props.item.ID }}
            </v-layout>
          </td>
          <td>{{ props.item.Name }}</td>
          <td>{{ props.item.SexFormatted }}</td>
          <td>{{ props.item.BirthdayFormatted }}</td>
          <td>
            <v-layout justify-center>
              {{ props.item.SiblingNumber }}
            </v-layout>
          </td>
          <td class="text-md-center">
            <v-icon v-if="props.item.Active" large color="green">done</v-icon>
            <v-icon v-else large color="error">clear</v-icon>
          </td>
        </template>
        <template slot="no-data">
          <v-alert :value="true" color="error" icon="error">
            {{'Sorry, nothing to display here :('}}
          </v-alert>

        </template>
      </v-data-table>

    </v-card>
  </div>
</template>

<script>
  import AddCostumer from './CostumerComponent/AddCostumer'
  import EditCostumer from './CostumerComponent/EditCostumer'
  import DeleteCostumer from './CostumerComponent/DeleteCostumer'

  export default {
    data: () => ({
      header: [
        { text: 'ID', align: 'center', value: 'ID', class: ['text-md-center'] },
        { text: 'Name', align: 'left', value: 'Name' },
        { text: 'Sex', align: 'left', value: 'Sex' },
        { text: 'Birthday', align: 'left', value: 'Birthday' },
        { text: 'Sibling Amount', align: 'center', value: 'SiblingNumber' },
        { text: 'Active', align: 'left', value: 'Active', class: ['text-md-center'] }
      ],
      itemsTable: [],
      search: '',
    }),
    methods: {
      getCostumers(){ return this.$http.get(this.$API + '/costumer')},
      firstRender(){
        this.getCostumers()
          .then(c => this.itemsTable = c.data)
          .catch(error => console.log(error))
      }
    },
    created(){
      this.firstRender()
      this.$bus.$on('/costumer', () => {
        this.firstRender()
      })
    },
    beforeDestroy () {
      this.$bus.$off('/costumer')
    },
    components:{
      AddCostumer,
      EditCostumer,
      DeleteCostumer
    }
  }
</script>

<style scoped>
</style>

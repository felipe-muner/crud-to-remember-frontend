<template lang="html">
  <div class="">
    <v-tooltip top>
      <v-btn @click.native.stop="dialog = true" small color="success" slot="activator" fab>
        <v-icon>add</v-icon>
      </v-btn>
      <span>Add</span>
    </v-tooltip>
    <v-dialog class="modalFilter" v-model="dialog" max-width="60%">
      <v-card>
        <v-card-title class="py-0">
          <span>Add Costumer</span>
          <v-spacer></v-spacer>
          <v-menu bottom left>
            <v-btn icon slot="activator" @click.stop="dialog=false">
              <v-icon>close</v-icon>
            </v-btn>
        </v-menu>
        </v-card-title>
        <v-container grid-list-md>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-layout row wrap>
              <v-flex xs12 class="pt-0">
                <v-text-field
                  label="Name"
                  v-model="Name"
                  :rules="NameRules"
                  type="text"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>                
                <v-menu
                  label="Birthday"
                  lazy
                  :close-on-content-click="false"
                  v-model="menuStartDate"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    label="Birthday"
                    v-model="StartDateFormatted"
                    :rules="BirthdayRules"
                    prepend-icon="event"
                    readonly
                    @blur="StartDate = parseDate(StartDateFormatted)"
                  ></v-text-field>
                  <v-date-picker v-model="StartDate" @input="StartDateFormatted = formatDate($event)" no-title scrollable autosave>
                  </v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-radio-group v-model="Sex" :rules="SexRules" row>
                <v-radio label="Not Known" value="0"></v-radio>
                <v-radio label="Male" value="1"></v-radio>
                <v-radio label="Female" value="2"></v-radio>
                <v-radio label="Not Applicable" value="9"></v-radio>
              </v-radio-group>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs8>
                <v-autocomplete
                  :items="cities"
                  label="Birthday City"
                  v-model="BirthdayPlace"
                  :rules="CityRules"
                ></v-autocomplete>
              </v-flex>
              <v-flex xs4>
                <v-text-field style="font-size:11px !important;"
                  label="Sibling Amount"
                  v-model="SiblingNumber"
                  :rules="SiblingAmountRules"
                  min="0"
                  type="number"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 class="text-xs-right">
                <v-btn
                  @click="submitForm"
                  :disabled="!valid"
                  color="primary"
                >
                  Creat
                </v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import axios from 'axios'
// import {bus} from '@/main'
// import {i18n} from '@/main'

export default {
  props:['firstRender'],
  data(){
    return {
      cities: [
        'Rio de Janeiro', 'New York', 'Moscow', 'São Paulo', 'Paris', 'London'
      ],
      dialog:false,
      Name: '',
      Birthday: '',
      StartDate: null,
      menuStartDate: false,
      StartDateFormatted: null,
      Sex: '',
      BirthdayPlace: '',
      SiblingNumber: '',
      NameRules: [
        (v) => !!v || 'Name is required'
      ],
      BirthdayRules: [
        (v) => !!v || 'Birthday is required'
      ],
      SexRules: [
        (v) => !!v || 'Sex is required'
      ],
      GenderRules: [
        (v) => !!v || 'Gender is required'
      ],
      CityRules: [
        (v) => !!v || 'City is required'
      ],
      SiblingAmountRules : [
        (v) => !!v || 'Sibling Amount is required'
      ],
      valid: true
    }
  },
  methods:{
    formatDate (date) {
      if (!date) {
        return null
      }
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate (date) {
      if (!date) {
        return null
      }
      const [day, month, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    submitForm(){
      if (this.$refs.form.validate()) {
        this.$http.post(this.$API+'/costumer/save',{
          Name: this.Name,
          Birthday: this.StartDate,
          Sex: this.Sex,
          BirthdayPlace: this.BirthdayPlace,
          SiblingNumber: this.SiblingNumber
        }).then(response=>{
          this.$refs.form.reset()
          alert(response.toString())
          this.dialog = false
        }).catch(error=>{
          console.log(error)
          alert(error.toString())
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>

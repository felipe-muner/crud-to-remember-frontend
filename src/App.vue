<template>
  <v-app>
    <div>
      <v-navigation-drawer
        fixed
        clipped
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-tile v-for="item in items" :key="item.text" @click="" :to="`${item.link}`">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
          <v-list>
            <v-list-tile v-for="item in items2" :key="item.text" avatar @click="">
              <v-list-tile-avatar>
                <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
              </v-list-tile-avatar>
              <v-list-tile-title v-text="item.text"></v-list-tile-title>
            </v-list-tile>
          </v-list>
          <v-list-tile class="mt-3" @click="">
            <v-list-tile-action>
              <v-icon color="grey darken-1">add_circle_outline</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="grey darken-1">settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        color="red"
        dense
        fixed
        clipped-left
        app
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-icon color="white" class="ml-5">build</v-icon>
        <v-toolbar-title class="mr-5 align-center">
          <span class="color-white">Felipe CRUD Example</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-content>
        <router-view/>
      </v-content>
    </div>
  </v-app>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/felipe-teste">FelipeTeste</router-link>
    </div> -->
    <!-- <router-view/> -->
</template>

<script>

  export default {
    data: () => ({
      drawer: true,
      items: [
        { icon: 'trending_up', text: 'Costumer', link: 'costumer' },
        { icon: 'subscriptions', text: 'Employee', link: 'employee' },
        { icon: 'history', text: 'Supplier', link: 'supplier' },
        { icon: 'featured_play_list', text: 'Partner', link: 'partner' }
      ],
      items2: [
        { picture: 28, text: 'Other Option 1' },
        { picture: 38, text: 'Other Option 2' },
        { picture: 48, text: 'Other Option 3' },
        { picture: 58, text: 'Other Option 4' },
        { picture: 78, text: 'Other Option 5' }
      ]
    }),
    props: {
      source: String
    },
    created(){

    }
  }
</script>
<style media="screen">
  .color-white{
    color: white;
  }
</style>

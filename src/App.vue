<template>
  <v-app id="inspire">
    <v-navigation-drawer
      class="pt-4"
      model-value
      rail
      v-model="drawer"
    >
      <leftSideNav />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>VIRUS<strong>TOTAL</strong></v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view />
    </v-main>
  </v-app>
</template>




<!--<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
-->



<script setup>
  import { ref } from 'vue'
import LeftSideNav from './components/sidenavigation/LeftSideNav.vue'

  const drawer = ref(null)
</script>

<script>
  export default {
  components: { LeftSideNav },
    data: () => ({ drawer: null }),
  }
</script>

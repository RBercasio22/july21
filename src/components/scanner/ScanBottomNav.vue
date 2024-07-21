<template>

    <!--class="overflow-visible" remove-->
    <v-layout style="height: 80px;">
      <v-bottom-navigation
        v-model="value"
        color="teal"
        grow

      >
   
        <v-btn>
          <router-link to="/scan/file">
          <v-icon>mdi-fingerprint</v-icon>
          URL
        </router-link>
        </v-btn>
    
        <v-btn>
          <router-link to="/scan/file">
          <v-icon>mdi-file-code</v-icon> 
          FILE
          </router-link>
        </v-btn>
     
        <v-btn>
          <router-link to="/scan/file">
          <v-icon>mdi-magnify</v-icon>
          SEARCH
        </router-link>
        </v-btn>
   
   
      </v-bottom-navigation>
    </v-layout>
</template>

<style scoped>

a {
  color: white;
  text-decoration: none;

}


</style>

<script>
import ScanContent from './ScanContent.vue';

    export default {
      data: () => ({ value: 1 }),
   
    }
</script>
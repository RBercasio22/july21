<template>

    <!--class="overflow-visible" remove-->
    <v-layout style="height: 80px;">
      <v-bottom-navigation
        v-model="value"
        color="teal"
        grow

      >
        <v-btn>
          <v-icon>mdi-fingerprint</v-icon>
          URL
        
        </v-btn>
        <v-btn>
          <v-icon>mdi-file-code</v-icon>
          FILE
        </v-btn>
  
        <v-btn>
          <v-icon>mdi-magnify</v-icon>
          SEARCH
        </v-btn>

   
      </v-bottom-navigation>
    </v-layout>
  </template>
  <script>
    export default {
      data: () => ({ value: 1 }),
   
    }
  </script>
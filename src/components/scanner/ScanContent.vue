<template>
    <!-- CONTENT DESCRIPTION -->
    <v-container>
      <!-- Header Section -->
      <v-row no-gutters>
        <v-col cols="12">
          <v-sheet class="pa-2 text-h2 text-center" style="color:green">
            <v-icon icon="mdi-fingerprint" color="blue"></v-icon>
            VIRUS<strong style="color:blue">TOTAL</strong>
          </v-sheet>
        </v-col>
        <!--SHORT DESCRIPTION FOR APPLICATION-->
        <v-row no-gutters>
            <v-col cols="3" style="background-color: rgb(33,33,33)">
                <!--set background rgb(33,33,33)-->
                <!--NO CONTENT ITS JUST A BLANK-->
            </v-col>
            <v-col cols="6">
                <v-sheet class="pa-2 text-center font-weight-light">Analyse suspicious files, domains, IPs and URLs to detect malware and other breaches, automatically share them with the <strong>security community.</strong></v-sheet>
            </v-col>
            <v-col cols="3" style="background-color: rgb(33,33,33)">
              <!--set background rgb(33,33,33)-->
               <!--NO CONTENT ITS JUST A BLANK-->
            </v-col>


              <!--INSERT A SCANBOTTOMNAVIGATION MENU-->
            <v-col cols="2" style="background-color: rgb(33,33,33)">
                <!--set background rgb(33,33,33)-->
                <!--NO CONTENT ITS JUST A BLANK-->
            </v-col>
            <v-col cols="8">
                <v-sheet class="pa-6"><ScanBottomNav /></v-sheet>
             
            </v-col>
            <v-col cols="2" style="background-color: rgb(33,33,33)">
                <!--set background rgb(33,33,33)-->
                <!--NO CONTENT ITS JUST A BLANK-->
            </v-col>
            <!--INSERT ANOTHER FUNCTION AND IMPLEMENT ROUTING-->
              <!--INSERT A SCANBOTTOMNAVIGATION MENU-->
              <v-col cols="2" style="background-color: rgb(33,33,33)">
                <!--set background rgb(33,33,33)-->
                <!--NO CONTENT ITS JUST A BLANK-->
            </v-col>
            <v-col cols="8">
                <v-sheet class="text-center pa-2">
                  <router-view></router-view>
                </v-sheet>
            </v-col>
            <v-col cols="2" style="background-color: rgb(33,33,33)">
                <!--set background rgb(33,33,33)-->
                <!--NO CONTENT ITS JUST A BLANK-->
            </v-col>

        </v-row>
      
      </v-row>

    </v-container>
  </template>
  
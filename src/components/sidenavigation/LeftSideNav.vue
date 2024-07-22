<template>

    <v-list-item class="pa-4" title="APP"></v-list-item>
    <v-divider></v-divider>
      <router-link v-for="item in menuItems" :key="item.to" :to="item.to" class="text-decoration-none on-surface" rel="noopener noreferrer">
        <v-list-item :prepend-icon="item.icon" link>
          
          <!--link :title="item.title" (Inside v-lis-tem loop)-->
        </v-list-item>
      </router-link>

</template>





<script>
export default {
  data() {
    return {
      menuItems: [
        //FOR PAGE ONLY
        { to: '/', icon: 'mdi-home', size: '10'},
        { to: '/Scan', icon: 'mdi-shield-bug'},
        { to: '/Card', icon: 'mdi-card-text'},
        { to: '/Post', icon: 'mdi-note-multiple-outline'},
        { to: '/Logout', icon: 'mdi-logout'}

        //ERROR
        //{to:'/Quit', icon: 'mdi-Logout', title:'none'}
        // Add more items as needed
        //Change link :title="item.title"
      ]
    };
  },
  methods: {
      logout(){
          alert("Logout");
      }
     
  }
};
</script>

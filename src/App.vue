<template>
 <v-app>
   <home></home>
 </v-app>
</template>

<script>
import home from "./view/home";
export default {
  name: 'App',

  components: {
    home,
  },

  data: () => ({
    //
  }),
};
</script>

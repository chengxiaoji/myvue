<template>
  <div class="homePage">
    <Navigation></Navigation>
    <Mainforum></Mainforum>
    <forumFooter></forumFooter>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Mainforum from "../components/Mainforum";
import forumFooter from "../components/forumFooter";
export default {
  name: "home",
  components: {
    forumFooter,
    Navigation,
    Mainforum,
  },


}
</script>

<style scoped>
.homePage{
  background-color: rgba(240,240,240,1);
}
</style>
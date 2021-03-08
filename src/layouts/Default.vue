<template>
 <div class="page-wrapper" :class="{noScroll: isMenuOpen}">
   <NavBar @menuOpened="isMenuOpen = $event" />
   <main>
      <slot/>
   </main>
 </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar
  },
  data() {
  return {
    isMenuOpen: false
  }
   },
   metaInfo(){
     return {
       bodyAttrs: {
         class: this.isMenuOpen ? 'noScroll' : ''
       }
     }
   }
}
</script>

<style>

.page-wrapper {
  background-repeat: no-repeat;
  background-position: center -50vh;
  background-size:cover;
  background-image: url('../assets/background.png');
  background-attachment: fixed;
}

main {
 padding-left: 200px;
}

@media screen and (max-width: 1920px) {
  .page-wrapper{
    background-position: center 0px;
    background-image: url('../assets/background@0.5x.png')

  }
}

@media screen and (max-width: 1000px) {
  main {
    padding-left: 0;
  }
  .page-wrapper {
  background-repeat: no-repeat;
  background-position: center 10vh;
  background-size:cover;
  background-image: url('../assets/background@0.25x.png')
}
}
</style>

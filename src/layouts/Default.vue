<template>
 <div class="page-wrapper" :style="styles">
   <NavBar />
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
import HexSvg from '@/assets/hexback.svg'
export default {
  components: {
    NavBar
  },
 data() {
  return {
    styles: {
      'background-image': `url(${HexSvg})`
    }
  }
   }
}
</script>

<style>

.page-wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 
  "nav main";
  height:100vh;
  overflow: hidden;
  background-repeat: repeat-y;
  background-position-x: center;
  background-size:100% auto;
  background-position-y: -20vh;
}

nav {
  grid-area: nav;
  background: rgba(43, 15, 82, .8);
}
main {
  grid-area: main;
  overflow-y: auto;
  /* min-height:200vh; */
}
</style>

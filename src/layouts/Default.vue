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
import HexSvg from '@/assets/hexback.svg'
import HexFadeSvg from "@/assets/hexback-fade.svg"
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar
  },
  data() {
  return {
    styles: {
      'background-image': `url(${HexSvg}), url(${HexFadeSvg})`
    }
  }
   }
}
</script>

<style>

.page-wrapper {
  background-repeat: no-repeat;
  background-position: center -20vh, center 80vh;
  background-size:100% auto, 100% auto;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  background: rgba(43, 15, 82, .8);
}
main {
 padding-left: 200px;
}
</style>

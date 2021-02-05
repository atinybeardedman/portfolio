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


main {
 padding-left: 200px;
}

@media screen and (max-width: 768px) {
  main {
    padding-left: 0;
  }
}
</style>

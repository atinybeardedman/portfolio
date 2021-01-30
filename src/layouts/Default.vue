<template>
 <div class="page-wrapper">
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
export default {
  components: {
    NavBar
  }
}
</script>

<style>
* {
  box-sizing:border-box;
}
body {
  margin: 0;
  background: #1b0934;
  color: #fff;
}
.page-wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 
  "nav main";
  height:100vh;
}

nav {
  grid-area: nav;
  background: #2b0f52;
}
main {
  grid-area: main;
}
</style>

<template>
  <Layout>
    <hero>
      <h1 class="title">About Me</h1>
      <p></p>
    </hero>
  </Layout>
</template>

<script>
import Hero from '../components/Hero.vue';
export default {
  metaInfo: {
    title: 'About Me'
  },
  components: {
    Hero
  }
}
</script>


<style>
.title {
    font-size: 2.5vw;
    font-weight:700;
    margin-bottom: 0;
}

.description {
  
}
</style>
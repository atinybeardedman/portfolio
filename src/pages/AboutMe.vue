<template>
  <Layout>
    <section class="full-height flex-center-all">
      <!--TODO: Learn more -->
      <!--TODO: Mobile Fixes -->
      <!--TODO: Better Photo -->
      <article class="flex space-evenly flex-center-cross">
        <div class="image-container">
          <Hexagon :styles="hexStyles" :border="hexBorder">
            <img style="width:100%" src="../assets/headshot.jpg" alt="Headshot" />
          </Hexagon>
        </div>
        <div class="detail-container">
          <h2>My Background</h2>
          <div class="detail-text">
            I'm a teacher turned web developer who loves to solve problems using
            code. I am currently creating applications using technologies such as
            Vue.js, Typescript, Angular, and static site generation.
          </div>
          <button class="button">Learn More</button>
        </div>
      </article>
    </section>
  </Layout>
</template>

<script>
import Hexagon from "../components/Hexagon.vue";
export default {
  metaInfo: {
    title: "About Me",
  },
  components: {
    Hexagon,
  },
  data() {
    return {
      hexStyles: {
        color: "white",
        background: "black",
        width: '25vw',
        height: '25vw',
      },
      hexBorder: {
        size: 2,
        color: "white",
      },
    };
  },
};
</script>


<style scoped>
section {
  padding: 2em 20%;
}

.detail-container {
  padding: 1.5em;
}
.detail-text {
  margin-bottom: 1em;
  font-size: 1.2em;
}

@media screen and (max-width:600px) {
  article {
    flex-direction: column;
  }
}
</style>
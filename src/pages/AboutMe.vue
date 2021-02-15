<template>
  <Layout>
    <section class="full-height flex-center-all">
      <article class="flex space-evenly align-items-center">
        <div class="image-container">
          <Hexagon v-bind="hexConfig">
            <img
              style="width: 100%"
              src="../assets/headshot.jpg"
              alt="Headshot"
            />
          </Hexagon>
        </div>
        <div class="detail-container">
          <h1 class="title">Meet Sean</h1>
          <div class="detail-text">
            <p>
              I'm a teacher turned web developer who loves to solve problems
              using code. I am currently creating applications using
              technologies such as Vue.js, Typescript, Angular, and the
              JAMstack.
            </p>
            <p>
              When I'm not coding you might find me in my woodshop working on a
              new project, reading a good book, or spending time outside with my
              chickens and ducks.
            </p>
          </div>
          <button @click="showModal = true" class="button">Learn More</button>
        </div>
      </article>
    </section>
    <Modal :show.sync="showModal">
      <div class="container">
        <h2>My Background</h2>
        I studied to become an educator, specifically a Chemistry teacher,
        because I enjoyed teaching and solving problems. Once I began teaching
        it became clear that there were problems that my school was having that
        could be solved using code, and so I offered to create some customized
        applications to address these problems. Along the way I found just how
        much I enjoyed coding solutions to complex problems and now am looking
        to devote myself to this work full time.
        <h2>My Teaching</h2>
        Although I studied Chemistry and Education in college, I have taught
        many subjects in the sciences including Conceptual Physics, Robotics,
        and Acoustics. I also was lucky enough to be given the chance to create
        a computer science curriculum at my school where I taught Web
        Development as well as Introductory Computer Science through Python.
      </div>
    </Modal>
  </Layout>
</template>

<script>
import Hexagon from "../components/Hexagon.vue";
import Modal from "@/components/Modal.vue";
export default {
  metaInfo: {
    title: "About Me",
  },
  components: {
    Hexagon,
    Modal,
  },
  data() {
    return {
      hexConfig: {
        styles: {
          color: "white",
          background: "white",
        },
        border: {
          size: "4px",
          color: "white",
        },
        sizes: {
          mobile: "50vw",
          default: "25vw",
        },
      },
      showModal: false,
    };
  },
};
</script>


<style scoped>
section {
  padding: 2em;
  max-width: 1600px;
  margin: 0 auto;
}

.detail-container {
  padding: 1.5em;
}
.detail-text {
  margin-bottom: 1em;
}

@media screen and (max-width: 600px) {
  article {
    flex-direction: column;
  }

  section {
    padding: 2em 1em;
  }
}
</style>
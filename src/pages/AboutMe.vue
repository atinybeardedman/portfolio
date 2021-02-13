<template>
  <Layout>
    <section class="full-height flex-center-all">
      <!--TODO: Learn more -->
      <!--TODO: Better Photo -->
      <article class="flex space-evenly align-items-center">
        <div class="image-container">
          <Hexagon :styles="hexStyles" :sizes="hexSizes" :border="hexBorder">
            <img
              style="width: 100%"
              src="../assets/headshot.jpg"
              alt="Headshot"
            />
          </Hexagon>
        </div>
        <div class="detail-container">
          <h2>My Background</h2>
          <div class="detail-text">
            I'm a teacher turned web developer who loves to solve problems using
            code. I am currently creating applications using technologies such
            as Vue.js, Typescript, Angular, and static site generation.
          </div>
          <button @click="showModal = true" class="button">Learn More</button>
        </div>
      </article>
    </section>
    <Modal :show.sync="showModal">
      <div class="container">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, magnam
        doloremque possimus itaque corrupti hic atque obcaecati autem quasi
        facere neque voluptatem, molestias doloribus vitae et ipsum unde?
        Beatae, qui!
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
      hexStyles: {
        color: "white",
        background: "black",
      },
      hexBorder: {
        size: '2px',
        color: "white",
      },
      hexSizes: {
        'mobile': '50vw',
        'default': '25vw'
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
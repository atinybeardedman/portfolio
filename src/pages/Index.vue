<template>
  <Layout>
      <Hero>
        <h3 class="name">Sean Dickinson</h3>
        <h1 class="headline">Digital Solutions Builder</h1>
        <div class="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolore
          tenetur, aspernatur id praesentium fugiat nesciunt adipisci! Est
          praesentium vero similique aliquid nihil. Natus perspiciatis qui
          delectus esse voluptatem.
        </div>
      </Hero>
    <section id="projects">
      <ProjectCard v-for="edge in $page.projects.edges" 
      :key="edge.node.id"
      v-bind="edge.node" />
    </section>
    <footer>
    </footer>
  </Layout>
</template>

<page-query>
  query {
    projects: allProject(sortBy: "order", order: ASC) {
      edges {
        node {
          id
          title
          path
          excerpt
          icon
          tags {
            id
            path
          }
        }
      }
    }
  }
</page-query>

<script>
import ProjectCard from "../components/ProjectCard.vue";
import Hero from "../components/Hero.vue"

export default {
  metaInfo: {
    title: "Sean Dickinson Portfolio",
  },
  components: {
    ProjectCard,
    Hero
  },
};
</script>

<style>


.name {
  font-size: clamp(1em, 1em + 1.5vw, 2em);
  font-weight:500;
  margin: 0.5em 0
}
.headline {
  font-size: clamp(1em, 2em + 2.5vw, 5em);
  font-weight:700;
  margin: 0.25em 0;
   background: -webkit-linear-gradient(45deg,#EF4DEE, #9D4EFC);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  text-align: left;
}

footer {
  padding-top: 10vh;
}

#projects {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <Layout>
      <Hero>
        <h3 class="name">Sean Dickinson</h3>
        <h1 class="headline">Digital Solutions Builder</h1>
        <div class="description">
          A Full Stack Developer with a passion for building specialized solutions for unique problems. Experienced in creating applications for the education sector both for administrators and teachers. 
        </div>
      </Hero>
    <section id="projects">
      <ProjectCard v-for="edge in $page.projects.edges" 
      :key="edge.node.id"
      v-bind="edge.node" />
    </section>
    <footer class="text-centered">
      <small>
        &copy; Sean Dickinson 2021
      </small>
    </footer>
  </Layout>
</template>

<page-query>
  query {
    projects: allProject(sortBy: "order", order: ASC, limit: 3) {
      edges {
        node {
          id
          title
          path
          excerpt
          icon
          
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
  max-width: 50em;
}

footer {
  padding: 10vh 0 1em;
}

#projects {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -10vh;
}
</style>

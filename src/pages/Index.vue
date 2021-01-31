<template>
  <Layout>
    <section class="hero">
      <div class="hero-content">
        <h3 class="name">Sean Dickinson</h3>
        <h1 class="headline">Digital Solutions Builder</h1>
        <div class="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolore
          tenetur, aspernatur id praesentium fugiat nesciunt adipisci! Est
          praesentium vero similique aliquid nihil. Natus perspiciatis qui
          delectus esse voluptatem.
        </div>
      </div>
    </section>
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
    projects: allProject {
      edges {
        node {
          id
          title
          path
          excerpt
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
export default {
  metaInfo: {
    title: "Sean Dickinson Portfolio",
  },
  components: {
    ProjectCard,
  },
};
</script>

<style>
.hero {
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.hero-content {
  text-align: center;
}

.name {
  font-size: 2vw;
  font-weight:500;
  margin: 0.5em 0
}
.headline {
  font-size: 4.5vw;
  font-weight:700;
  margin: 0.25em 0;
   background: -webkit-linear-gradient(45deg,#EF4DEE, #9D4EFC);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  padding: 0 25%;
  text-align: left;
}

#projects {
  display: flex;
  flex-direction: column;
  max-width: 60vw;
  margin: 0 auto;
}

footer {
  padding-top: 10vh;
}
</style>

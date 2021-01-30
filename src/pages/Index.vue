<template>
  <Layout>
    <section class="hero">
      <div class="hero-content">
        <h2 class="name">Sean Dickinson</h2>
        <h1 class="headline">Digital Solutions Builder</h1>
        <div class="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolore
          tenetur, aspernatur id praesentium fugiat nesciunt adipisci! Est
          praesentium vero similique aliquid nihil. Natus perspiciatis qui
          delectus esse voluptatem. Error?
        </div>
      </div>
    </section>
    <section id="projects">
      <ProjectCard v-for="edge in $page.projects.edges" 
      :key="edge.node.id"
      v-bind="edge.node" />
    </section>
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
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.hero-content {
  text-align: center;
}

.name {
  font-size: 2em;
}
.headline {
  font-size: 4em;
}

.description {
  padding: 0 20%;
}

#projects {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
}
</style>

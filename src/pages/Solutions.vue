<template>
  <Layout>
    <hero>
      <article v-for="{ node } in $page.projects.edges" :key="node.id">
        {{ node.title }}
      </article>
    </hero>
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
import Hero from "../components/Hero";
export default {
  components: {
    Hero,
  },
};
</script>
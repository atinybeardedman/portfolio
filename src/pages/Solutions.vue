<template>
  <Layout>
    <section class="section full-height flex flex-column flex-center-all">
      <div class="solution-grid">
        <g-link
          v-for="{ node } in $page.projects.edges"
          :key="node.id"
          :to="node.path"
        >
          <article class="solution-tile">
            <div class="content">
              <div class="image-wrapper">
                <g-image :src="node.tile"></g-image>
              </div>
              <div
                class="description-wrapper flex flex-column space-evenly text-centered"
              >
                <div class="flex space-evenly">
                  <DevIcon
                    v-for="(tag, index) in node.tags"
                    :key="index"
                    :name="tag.name"
                    width="3em"
                  >
                  </DevIcon>
                </div>
              </div>
            </div>
            <div class="solution-tag text-centered">
              {{ node.title }}
            </div>
          </article>
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    projects: allProject(sortBy: "order", order: ASC) {
      edges {
        node {
          id
          title
          tile (width: 300, quality: 100)
          path
          excerpt
          tags {
            name
          }
        }
      }
    }
  }
</page-query>

<script>
import DevIcon from "@/components/DevIcon.vue";
export default {
  components: {
    DevIcon,
  },
};
</script>

<style>
.description-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  transition: opacity 0.3s, visibility 0s 0.3s;
}

.solution-tile {
  margin: 0 auto;
  width: min(300px, 70vw);
  height: calc(min(300px, 70vw) + 2em);
}

.solution-tile:hover .description-wrapper {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s, visibility 0s;
}

.solution-tile .image-wrapper {
  height: min(300px, 70vw);
  width: min(300px, 70vw);
}

.solution-tile .image-wrapper img {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.solution-tile .content {
  position: relative;
}

.solution-tag {
  background: var(--accentColor);
  color: white;
  height: 2em;
  line-height: 2;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.solution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1em;
  width: 90%;
  max-width: 1800px;
}
</style>
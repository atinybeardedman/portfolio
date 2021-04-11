<template>
  <Layout>
    <section class="section full-height flex flex-column flex-center-main">
      <div class="flex space-evenly flex-wrap">
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
                  <DevIcon v-for="(tag, index) in node.tags" :key="index">
                    <component :is="getIcon(tag.name)"></component>
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
          tile (width: 400, quality: 100)
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
import jsIcon from "@/assets/devIcons/js.svg?inline";
import vueIcon from "@/assets/devIcons/vuejs.svg?inline";
import tsIcon from "@/assets/devIcons/ts.svg?inline";
import angularIcon from "@/assets/devIcons/angular.svg?inline";
import html5Icon from "@/assets/devIcons/html5.svg?inline";
import firebaseIcon from "@/assets/devIcons/firebase.svg?inline";
import DevIcon from "@/components/DevIcon.vue";
export default {
  components: {
    jsIcon,
    vueIcon,
    tsIcon,
    html5Icon,
    angularIcon,
    firebaseIcon,
    DevIcon,
  },
  methods: {
    getIcon(iconName) {
      const icons = {
        JS: jsIcon,
        TS: tsIcon,
        VueJS: vueIcon,
        HTML5: html5Icon,
        Angular: angularIcon,
        Firebase: firebaseIcon,
      };
      return icons[iconName];
    },
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
  margin: 1em;
  width: min(400px, 70vw);
  height: calc(min(400px, 70vw) + 2em);
}

.solution-tile:hover .description-wrapper {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s, visibility 0s;
}

.solution-tile .image-wrapper {
  height: min(400px, 70vw);
  width: min(400px, 70vw);
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
</style>
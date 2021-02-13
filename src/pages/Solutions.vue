<template>
  <Layout>
  
      <section class="section full-height">
        <h1>Solutions</h1>
        <div class="flex space-evenly flex-wrap">
          <g-link v-for="{ node } in $page.projects.edges" :key="node.id" :to="node.path">
            <article class="solution-tile">
              <div class="image-wrapper">
                <g-image :src="node.screenshot1"></g-image>
              </div>
              <div class="description-wrapper flex flex-column space-evenly text-centered">
                <h3>{{node.title}}</h3>
                <div class="flex space-evenly">
                 <DevIcon v-for="(tag, index) in node.tags" :key="index">
                   <component :is="getIcon(tag.name)"></component>
                 </DevIcon>
                </div>
              </div>
            </article>
          </g-link>
        </div>
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
          screenshot1 (width: 600, quality: 100)
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
import jsIcon from '@/assets/devIcons/js.svg?inline'
import vueIcon from '@/assets/devIcons/vuejs.svg?inline'
import tsIcon from '@/assets/devIcons/ts.svg?inline'
import html5Icon from '@/assets/devIcons/html5.svg?inline'
import DevIcon from '@/components/DevIcon.vue';
export default {
  components: {
    jsIcon,
    vueIcon,
    tsIcon,
    html5Icon,
    DevIcon
  },
  methods: {
    getIcon(iconName) {
      const icons = {
        JS: jsIcon,
        TS: tsIcon,
        VueJS: vueIcon,
        HTML5: html5Icon
    };
    return icons[iconName]
  },
  // getTagList()
  
}
}
</script>

<style>
  .image-wrapper {
    margin-bottom: 1em;
  }

  .description-wrapper {
    position: absolute;
    width:100%;
    height:100%;
    top: 0;
    left: 0;
    opacity: 0;
    background: rgba(0,0,0,0.5);
    visibility: hidden;
    transition: opacity 0.3s, visibility 0s 0.3s;
  }

  .solution-tile:hover .description-wrapper {
    
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s, visibility 0s;
  }

  .solution-tile {
    position: relative;
  }
</style>
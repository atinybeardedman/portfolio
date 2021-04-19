<template>
  <Layout :pageTitle="$page.project.title">
    <article class="project-detail">
      <section class="section">
        <div class="container">
          <h1 class="title">{{ $page.project.title }}</h1>
          <div class="icons flex">
            <dev-icon class="p-1" v-for="(tag, index) in $page.project.tags" :key="index" :name="tag.name"></dev-icon>
          </div>
          <div class="links flex">
            <a :href="$page.project.demo" class="button" target="_blank"
              >Live Demo</a
            >
            <a :href="$page.project.repo" class="button" target="_blank"
              >View Code</a
            >
          </div>
          <div class="md-content">
            <div v-html="$page.project.content"></div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
</template>


<page-query>
   query projects($path: String){
    project: project(path: $path){
     id
     title
     excerpt
     content
     demo
     repo
     tags {
       name
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

<style scoped>
.project-detail {
  min-height: 100vh;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}


.links a {
  margin-right: 1em;
}

@media screen and (max-width:600px){
  .project-detail {
    width: 100%;
  }
}

</style>

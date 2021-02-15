<template>
  <Layout :pageTitle="$page.project.title">
    <article class="project-detail">
      <section class="section">
        <div class="container">
          <h1 class="title">{{ $page.project.title }}</h1>
          <div class="links flex flex-space-evenly">
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



<style scoped>
.project-detail {
  min-height: 100vh;
  max-width: 1600px;
  margin: 0 auto;
}

.links {
  padding: 2rem 0;
}

.links a {
  margin-right: 1em;
}

</style>

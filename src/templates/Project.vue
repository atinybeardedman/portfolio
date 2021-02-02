<template>
  <Layout :pageTitle="$page.project.title">
    <article class="project-detail">
      <section class="section">
        <div class="container">
          <h1 class="title">{{ $page.project.title }}</h1>
          <div class="links">
            <a :href="$page.project.demo" class="button" target="_blank"
              >Live Demo</a
            >
            <a :href="$page.project.repo" class="button" target="_blank"
              >View Code</a
            >
          </div>
          <div class="content">
            <div v-html="$page.project.content"></div>
          </div>
        <h2>Screenshots</h2>
        <div class="image-container">
          <g-image :src="$page.project.screenshot1" fit="inside" />
          <g-image :src="$page.project.screenshot2" fit="inside" />
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
     screenshot1 (width: 533, height: 300, quality: 90)
     screenshot2 (width: 533, height: 300, quality: 90)
     tags {
       id
     }

    }
  }
</page-query>

<style scoped>
.project-detail {
  min-height: 100vh;
}
.container {
  padding: 2rem 5rem;
}
.title {
  font-size: 2vw;
  font-weight: 500;
  margin: 0.5em 0;
}
.links {
  padding: 2rem 0;
}

.links a {
  margin-right: 1em;
}

.image-container {
  display: flex;
  justify-content: space-evenly;
}
</style>

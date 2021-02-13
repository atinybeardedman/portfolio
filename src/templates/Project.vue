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
          <div class="content">
            <div v-html="$page.project.content"></div>
          </div>
          <h2>Screenshots</h2>
          <div class="image-container">
            <div class="screenshot">
              <g-image :src="$page.project.screenshot1" />
            </div>
            <div class="screenshot">
              <g-image :src="$page.project.screenshot2" />
            </div>
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
     screenshot1 (width: 1000, quality: 100)
     screenshot2 (width: 1000, quality: 100)
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

.image-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  --multiplier: calc(600px - 100%);
}

.screenshot{
  padding: 1em;
  min-width: 45%;
  max-width: 100%;
  flex-grow: 1;
  flex-basis: calc(var(--multiplier) * 999)
}


</style>

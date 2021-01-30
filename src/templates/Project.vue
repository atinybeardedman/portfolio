<template>
  <Layout :pageTitle="$page.project.title">
    <section class="section">
      <div class="container">
        <div class="content">
          <div v-html="$page.project.content"></div>
        </div>
      </div>
    </section>
  </Layout>
</template>


<page-query>
   query projects($path: String){
    project: project(path: $path){
     id
     title
     excerpt
     content
     tags {
       id
     }

    }
  }
</page-query>

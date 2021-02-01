<template>
  <article>
      <div class="card-text">
        <h2 class="title">{{title}}</h2>
        <div class="description">
            {{excerpt}}
        </div>
        <g-link :to="path" class="button">Learn More</g-link>
      </div>
      <div class="card-image">
      </div>

  </article>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['title', 'excerpt', 'path']
}
</script>

<style scoped>

article {
    padding-left: 20%;

}

.title {
    font-size: 2.5vw;
    font-weight:700;
    margin-bottom: 0;
}


.card-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 60%;
}
.description {
    padding: 1em 0;
    font-family: Maven Pro;
    font-weight:700;
}
</style>
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
.title {
    font-size: 2.5rem;
    margin-bottom: 0;
}
.button {
    background: #6923CC;
    color: white;
    text-decoration: none;
    padding: 0.5em 1em;
    border-radius: 4px;
    width: 7.5em;
    text-align: center;
}

.card-text {
    display: flex;
    flex-direction: column;
}
.description {
    padding: 1em 0;
}
</style>
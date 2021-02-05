<template>
  <article>
      <div class="card-text">
        <h2 class="title">{{title}}</h2>
        <div class="description">
            {{excerpt}}
        </div>
        <g-link :to="path" class="button">Learn More</g-link>
      </div>
      <div class="card-image" :style="{'clip-path': `url(#${svg}-svg)`}">
      </div>
      <component :is="dynamicSvg" height="0" width="0"></component>
  </article>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['title', 'excerpt', 'path', 'svg'],
   computed: {
       dynamicSvg(){
           return () => import(`@/assets/${this.svg}.svg?inline`)
       }
   }
}
</script>

<style scoped>

article {
    margin-bottom: 5em;
    padding: 0 20%;
    display:flex;
    align-items: stretch;
}

article:nth-child(even){
    flex-direction: row-reverse;
}

.title {
    font-size: clamp(1em, 1em + 1.5vw, 2em);
    font-weight:700;
    margin: 0;
}


.card-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 60%;
}

.card-image {
    background: linear-gradient(to right, #ba59a6 0%, #69aed8 50%, #1c12a8 100%);
    width: 30%;
}
.description {
    padding: 1em 0;
    font-family: Maven Pro;
    font-weight:500;
}

svg {
    position: absolute;
}
</style>
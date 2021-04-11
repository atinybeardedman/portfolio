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
          <font-awesome-icon :icon="iconName" size="6x"></font-awesome-icon>
      </div>
  </article>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['title', 'excerpt', 'path', 'icon'],
    computed: {
        iconName(){
            return this.icon.split(',')
        }
    }
}
</script>

<style scoped>

article {
    margin-bottom: 5em;
    max-width: 800px;
    width: 90%;
    display:flex;
    align-items: stretch;
}

article:nth-child(even){
    flex-direction: row-reverse;
}

article:nth-child(even) .card-image{
    justify-content: flex-start;
}

article:nth-child(even) .card-image svg{
    width: 1em;
}


.card-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 1em;
}

.card-image {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1 0 7.5em
}
.description {
    padding: 1em 0;
    font-family: Maven Pro;
    font-weight:500;
}

@media screen and (max-width:600px){
    article, article:nth-child(even) {
        flex-direction: column;
        justify-content: center;
    }

    article .card-image, article:nth-child(even) .card-image{
        order: -1;
        justify-content: center;
    }
}
</style>
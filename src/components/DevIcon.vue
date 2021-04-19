<template>
<div class="dev-icon">
  <component :style="styles" :is="getIcon(name)"></component>
</div>
</template>

<script>
import jsIcon from "@/assets/devIcons/js.svg?inline";
import vueIcon from "@/assets/devIcons/vuejs.svg?inline";
import tsIcon from "@/assets/devIcons/ts.svg?inline";
import angularIcon from "@/assets/devIcons/angular.svg?inline";
import html5Icon from "@/assets/devIcons/html5.svg?inline";
import firebaseIcon from "@/assets/devIcons/firebase.svg?inline";
import wordpressIcon from "@/assets/devIcons/wordpress.svg?inline";
import gridsomeIcon from "@/assets/devIcons/gridsome.svg?inline";
export default {
    name: 'DevIcon',
    props: {
      name: String,
      width: {
        type: String,
        default: '1.5em'
      }
    },
     components: {
    jsIcon,
    vueIcon,
    tsIcon,
    html5Icon,
    angularIcon,
    firebaseIcon,
    wordpressIcon,
    gridsomeIcon
  },
    methods: {
    getIcon(iconName) {
      const icons = {
        JS: jsIcon,
        TS: tsIcon,
        VueJS: vueIcon,
        HTML5: html5Icon,
        Angular: angularIcon,
        Firebase: firebaseIcon,
        Gridsome: gridsomeIcon,
        Wordpress: wordpressIcon
      };
      return icons[iconName];
    }
    },
    computed: {
      styles() {
        return {
          '--iconWidth' : this.width
        }
      }
  },
    
}
</script>

<style scoped>
.dev-icon svg{
  width: var(--iconWidth)
}


</style>
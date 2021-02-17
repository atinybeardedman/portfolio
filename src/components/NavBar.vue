<template>
  <nav @mouseleave="handleHover(false)">
    <button class="nav-button" @click="openMenu" :class="{opened}">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="root-menu" :class="{opened}">
      <div class="nav-container">
        <div class="nav-link-container">
          <g-link to="/">Home</g-link>
        </div>
        <div
          v-for="(link, index) of links"
          :key="index"
          :class="{ showSubmenu: link.showSubmenu }"
          class="nav-link-container"
          @mouseover="handleHover(link.showSubmenu, index)"
        >
          <g-link v-if="!link.external" :to="'/' + safeLink(link.link)">{{ link.link }}</g-link>
          <a v-else :href="link.href" target="_blank">{{link.link}}</a>
        </div>
      </div>
      <!-- Add icon links for github, etc -->
    </div>
    <transition name="menu">
        <div v-if="showSub" class="child-menu nav-container">
        <div>
            <!-- <h3 class="subtitle">{{this.subTitle}}</h3> -->
            <div v-for="{node} of $static.projects.edges" :key="node.id" class="nav-link-container child-link">
                <g-link :to="node.path">{{node.title}}</g-link>
            </div>
        </div>
        </div>

    </transition>
  </nav>
</template>

<static-query>
query {
  projects: allProject(sortBy: "order", order: ASC) {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</static-query>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      links: [
        {
          link: "Solutions",
          showSubmenu: true,
        },
        { link: "Resume", external: true, href: '/Sean-Dickinson.pdf' },
        { link: "About Me" },
        { link: "Contact" },
      ],
      showSub: false,
      currentIndex: 0,
      opened: false
    };
  },
  methods: {
    safeLink(link) {
      let safe = link;
      while (safe.includes(" ")) {
        safe = safe.replace(" ", "-");
      }
      return safe;
    },
    handleHover(showSubmenu, index) {
      this.showSub = showSubmenu;
      this.currentIndex = index;
    },
    getSubLink(link){
        return `/${this.subPath}/${this.safeLink(link)}`
    },
    openMenu(){
      this.opened = !this.opened;
      this.$emit('menuOpened', this.opened);
    }
  },
  computed: {
    subMenuItems() {
        const items = this.links[this.currentIndex].subItems;
      return items ? items : []
    },
    subTitle(){
        const subTitle = this.links[this.currentIndex].subTitle; 
        return subTitle ? subTitle : '';
    },
    subPath(){
        return this.safeLink(this.links[this.currentIndex].link)
    }
  },
};
</script>


<style>
nav .root-menu a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: Maven Pro;
  font-weight: 400;
}

nav a {
  color: white;
  text-decoration: none;
  position: relative;
}

nav a::after {
  content: "";
  width: 0px;
  height: 2px;
  background: #fff;
  margin: 2px 0 0;
  transition: opacity 0.5s, width 0.5s;
  opacity: 0;
  bottom: -7.5px;
  left: 0;
  position: absolute;
}
nav a:hover::after,
a.active--exact::after {
  width: 100%;
  opacity: 1;
}

.nav-link-container {
  width: 100%;
  text-align: center;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index:1;
}

.root-menu {
  width: 200px;
  background: rgba(43, 15, 82, 0.8);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:2;
}

.child-menu {
  width: 200px;
  height: 100%;
  position: fixed;
  left: 200px;
  top: 0px;
  background: rgba(7, 13, 51, 0.8);
  transition: width 0.25s, opacity 0.15s 0.1s, visibility 0s;
  z-index:0;
}

.child-link {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    margin: 1em 0.5em;
}

.menu-enter, .menu-leave-to {
  width: 0px;
  opacity: 0;
  visibility: hidden;
  transition: width 0.25s, opacity 0.15s, visibility 0s 0.25s;
}

.child-menu div {
  width: 200px;
}

.subtitle {
  border-bottom: 2px solid #6923cc;
  margin: 0.5em;
  padding-bottom: 0.5em;
}

.nav-container {
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.nav-button {
  position: fixed;
  top: 1rem;
  left:1rem;
  background: none;
  outline: none;
  border:none;
  display: none;
  visibility: hidden;
}

.nav-button span
{
  display: block;
  width: 32px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: center center;
  
  transition: transform 0.5s,
              opacity 0.55s ease;
}



.nav-button.opened span
{
  opacity: 1;
}

.nav-button.opened span:first-child {
  transform: translateY(9px) rotate(45deg)
}


.nav-button.opened span:nth-child(2)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.nav-button.opened span:last-child
{
  transform: translateY(-9px) rotate(-45deg);
}

@media screen and (max-width: 1000px){
  .nav-button {
    display: block;
    visibility: visible;
  }

  .nav-container {
    min-height: 40vh;
  }

  .root-menu {
    visibility: hidden;
    background: rgba(43, 15, 82, 0.9);
    width: 0;
    opacity: 0;
    transition: opacity 0.5s,width 0.3s, visibility 0s 0.5s;
  }

  .root-menu.opened {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s, width 0.3s;
    width: 100vw;
  }
}
</style>
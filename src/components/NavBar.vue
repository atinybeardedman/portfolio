<template>
  <nav @mouseleave="handleHover(false)">
    <div class="root-menu">
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
          <g-link :to="'/' + safeLink(link.link)">{{ link.link }}</g-link>
        </div>
      </div>
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
        { link: "Resume" },
        { link: "About Me" },
        { link: "Contact" },
      ],
      showSub: false,
      currentIndex: 0,
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
</style>
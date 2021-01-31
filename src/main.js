// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "@fontsource/maven-pro";
import "@fontsource/roboto";
import "@fontsource/maven-pro/500.css";
import "@fontsource/maven-pro/700.css";
import '~/assets/styles.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

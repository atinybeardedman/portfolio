// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "@fontsource/maven-pro";
import "@fontsource/roboto";
import "@fontsource/maven-pro/500.css";
import "@fontsource/maven-pro/700.css";
import '~/assets/styles.css'
import DefaultLayout from '~/layouts/Default.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faConnectdevelop, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faChartBar, faComment, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faTh, faCarSide } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faChartBar, faConnectdevelop, faTh, faComment, faEnvelope, faUser, faLinkedin, faCarSide)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}

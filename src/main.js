
import { createApp } from 'vue'
import App from './App.vue'
import './css/index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Brand icons
import BottomNavbar from './BottomNavbar.vue';
import TopNav from './components/TopNav.vue';
import Background from './components/Background.vue';
import Tap from './components/Tap.vue';
import Task from './components/Task.vue';
// Add the icons to the library
library.add(fas, fab);

const app = createApp(App);

// Register the FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('bottom-bar', BottomNavbar);
app.component('top-nav', TopNav);
app.component('background', Background);
app.component('tap', Tap);
app.component('task',Task);
app.mount('#app');
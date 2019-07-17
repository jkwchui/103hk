// import BootstrapVue from '../../node_modules/bootstrap-vue';
// import {
//     library
// } from '../../node_modules/@fortawesome/fontawesome-svg-core';
// import {
//     FontAwesomeIcon
// } from '../../node_modules/@fortawesome/vue-fontawesome';
// import {
//     fas
// } from '../../node_modules/@fortawesome/free-solid-svg-icons';

// import '../../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'

// import './mathJaxConfig.js'
// import '../../node_modules/mathjax/MathJax.js'

// import { plugin } from 'vue-babylonjs'

// Object.defineProperty(Vue.prototype, '$airtable', { value: Airtable });


export default ({
    Vue,
    options,
    router,
}) => {
    // Vue.component('font-awesome-icon', FontAwesomeIcon);
    // library.add(fas);
    // Vue.use(BootstrapVue);
    Vue.use(ElementUI);
    Vue.use(require('vue-moment'))
    // Vue.use(plugin)
    Vue.prototype.$teacher = true; //global variable identifying teacher or not
    
}
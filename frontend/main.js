require('./bootstrap');
import Menu from './components/Menu.vue'
import Schedule from './components/Schedule.vue'

import Vue        from 'vue'
import axios      from 'axios'

Vue.axios = axios.create({
    baseURL : 'http://127.0.0.1/api/'
});


new Vue({
    components : {
        'component-menu'    : Menu,
        'component-schedule'    : Schedule,
    },
}).$mount('#app');
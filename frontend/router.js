import VueRouter    from 'vue-router'
import user from './controllers/User.js'
import RenderInventory from './controllers/RenderInventory.js'

import UserSellComponent from './components/UserSell.vue'


export default new VueRouter({
    mode: 'history',
    base: __dirname,
	routes: [
		{ path: '/sell', component: UserSellComponent, beforeEnter (to, from, next) {
		  	setTimeout(() => {
			  	if(RenderInventory.rendered){
			  		RenderInventory.FilterItems();
			  	}
			}, 1000);
			
		  	AuthCheck().then((res) => {
		  		if(!res) next('/');
		  	})

		  	next();
		  }
		},
		{ path: '/logout', beforeEnter (to, from, next) {
		  	user.logout();
		  	next('/');
		  }
		}
	]
});
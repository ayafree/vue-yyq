import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Demos from '@/components/Demos'
import Spinner from '@/components/Spinner'


Vue.use(Router)

export default new Router({
	base: __dirname,
	routes: [
	    {
	    	path: '/',
	    	name: 'Demos',
	    	component: Demos
	    },
	    {
	    	path: '/Spinner',
	    	name: "Spinner",
	    	component: Spinner
	    }
	]
})

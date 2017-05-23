import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FastClick from 'fastclick'

//fastclick
document.addEventListener('DOMContentLoaded', function(){
	if(FastClick ) FastClick.attach(document.body);
},false);


Vue.use(Router)

export default new Router({
	base: __dirname,
	routes: [
	    {
	      path: '/',
	      name: 'Hello',
	      component: Hello
	    }
	]
})

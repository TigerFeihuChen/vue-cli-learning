import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import tigerCounter from '@/components/tiger-counter';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/counter',
      name: 'counter',
      component: tigerCounter,
    },
  ],
});

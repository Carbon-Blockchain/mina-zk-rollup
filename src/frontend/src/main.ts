import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Overview from './views/Overview.vue';
import NotFound from './views/NotFound.vue';

import Transactions from './views/Transactions.vue';
import Blocks from './views/Blocks.vue';
import Accounts from './views/Accounts.vue';

import App from './App.vue';

import 'virtual:windi.css';

import './assets/nord.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview,
    },
    {
      path: '/transactions',
      name: 'Transactions',
      component: Transactions,
    },
    {
      path: '/blocks',
      name: 'Blocks',
      component: Blocks,
    },
    {
      path: '/accounts',
      name: 'Accounts',
      component: Accounts,
    },
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
  ],
});

createApp(App).use(router).mount('#app');

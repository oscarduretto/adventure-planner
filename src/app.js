import Vue from 'vue';
import App from './app.vue';
import { createRouter } from './router';

export function createApp () {
  const router = createRouter();

  const app = new Vue({
    // the root instance simply renders the App component.
    router,
    render: h => h(App)
  });

  return { app, router };
}
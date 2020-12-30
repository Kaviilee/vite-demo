import { createApp } from 'vue';
import App from './App';
import { router } from './router';
import { store } from './store';
import './styles/index.less';

const app = createApp(App);

// can not use with tsx
app.directive('highlight', {
  beforeMount(el: HTMLElement, { value }: { value: string }) {
    el.style.background = value;
  },
});

app.use(router);
app.use(store);

app.mount('#app');

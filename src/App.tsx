import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import logo from '@/assets/img/logo.png';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  render() {
    return (
      <>
        <img src={logo} alt="Vue logo" />
        <HelloWorld msg={'Hello Vue 3.0 + Vite!'} />
        <RouterView />
      </>
    );
  },
});

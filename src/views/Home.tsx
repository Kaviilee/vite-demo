import { ref, defineComponent } from "vue";
import { RouterLink } from 'vue-router'
import '@/assets/css/home.less'

const Home = defineComponent({
  setup() {
    const msg = ref("home");
    const color = ref("red");

    return {
      msg,
      color,
    };
  },

  render() {
    return (
      <div class="home">
        <span>{ this.msg }</span>
        <RouterLink to="/foo" class="link">foo</RouterLink>
      </div>
    )
  }

})

export default Home

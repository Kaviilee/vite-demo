import { ref, defineComponent } from 'vue';
import GoogleMaps from '@/components/GoogleMaps';

const Foo = defineComponent({
  components: {
    GoogleMaps,
  },
  setup() {
    const msg = ref('foo');

    return {
      msg,
    };
  },

  render() {
    return (
      <div>
        <div class="link">{this.msg}</div>
        <GoogleMaps />
      </div>
    );
  },
});

export default Foo;

import { defineComponent, ref, reactive } from 'vue';
import { useStore } from 'vuex';

type Account = {
  money: number;
};

const HelloWord = defineComponent({
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup() {
    const count = ref(0);
    const account = reactive<Account>({
      money: 0,
    });
    const store = useStore();

    const handleClick = () => {
      count.value++;
      account.money++;
      store.dispatch('increment');
    };

    return {
      store,
      account,
      count,
      handleClick,
    };
  },

  render() {
    return (
      <>
        <h1>{this.msg}</h1>
        <button onClick={this.handleClick}>
          count is: {this.count}&nbsp;{this.account.money}&nbsp;{this.store.getters.count}
        </button>
        <p>
          Edit <code>components/HelloWorld.vue</code>&nbsp;
          <span>to test hot module replacement.</span>
        </p>
      </>
    );
  },
});

export default HelloWord;

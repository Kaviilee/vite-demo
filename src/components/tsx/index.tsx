import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Flexbox",
  setup() {
    const count = ref(0);
    const increment = () => count.value++;

    return {
      count,
      increment,
    };
  },

  render() {
    return (
      <>
        <button onClick={this.increment}>Increment</button>
        <span style={{ marginLeft: "8px" }}>{this.count}</span>
      </>
    );
  },
});

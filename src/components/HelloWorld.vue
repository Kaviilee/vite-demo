<template lang="pug">
h1 {{ msg }}
button(@click="handleClick") count is: {{ count }} {{ account.money }} {{ store.getters.count }}
p Edit
  code(v-highlight="'yellow'") components/HelloWorld.vue
  span  to test hot module replacement.


</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex";

type Account = {
  money: number;
};

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
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
      store.dispatch("increment");
    };

    return {
      store,
      account,
      count,
      handleClick,
    };
  },
});
</script>

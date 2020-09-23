<template lang="pug">
h1 {{ msg }}
button(@click="handleClick") count is: {{ count }} {{ account.money }} {{ store.getters.count }}
p Edit 
  code(v-highlight="'yellow'") components/HelloWorld.vue
  span  to test hot module replacement.

  
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const count = ref(0)
    const account = reactive({})
    const store = useStore()

    onMounted(() => {
      new Proxy(account, {
        get(target, key, receiver) {
          return Reflect.get(target, key, receiver)
        },
        set(target, key, val, receiver) {
          Reflect.set(target, key, val, receiver)
        }
      })
      account.money = 0
    })

    const handleClick = () => {
      count.value++
      account.money++
      store.dispatch('increment')
    }

    return  {
      store,
      account,
      count,
      handleClick
    }
  }
})
</script>

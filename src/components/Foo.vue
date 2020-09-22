<template>
    <div>{{ msg }}</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'Foo',
    setup() {
        const msg = ref('foo')
        
        return {
            msg
        }
    }
})
</script>
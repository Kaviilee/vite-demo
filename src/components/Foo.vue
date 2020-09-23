<template lang="pug">
div {{msg}} &emsp;
    router-link(to="/") home
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
<template lang="pug">
div {{msg}} &emsp;
    router-link(to="/foo") foo
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'Home',
    setup() {
        const msg = ref('home')
        
        return {
            msg
        }
    }
})
</script>
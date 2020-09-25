<template lang="pug">
div {{msg}} &emsp;
    router-link(to="/foo") foo
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Home',
    setup() {
        const msg = ref('home')
        const color = ref('red')
        
        return {
            msg,
            color
        }
    }
}
</script>

<template lang="pug">
div {{msg}} &emsp;
    router-link(to="/") home
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Foo',
    setup() {
        const msg = ref('foo')
        
        return {
            msg
        }
    }
}
</script>
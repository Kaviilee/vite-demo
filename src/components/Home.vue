<template lang="pug">
div {{msg}} &emsp;
    router-link(to="/foo") foo
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
    name: 'Home',
    setup() {
        const msg = ref('home')
        const color = ref('red')

        return {
            msg,
            color
        }
    }
})
</script>

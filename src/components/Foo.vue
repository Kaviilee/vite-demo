<template lang="pug">
div {{msg}} &emsp;
    router-link(to="/") home
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

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

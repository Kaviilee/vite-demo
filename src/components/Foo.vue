<template>
  <div>{{ msg }}</div>
  <GoogleMaps></GoogleMaps>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import GoogleMaps from './GoogleMaps.vue'

export default defineComponent({
    name: 'Foo',
    components: {
      GoogleMaps
    },
    setup() {
        const msg = ref('foo')

        return {
            msg
        }
    }
})
</script>

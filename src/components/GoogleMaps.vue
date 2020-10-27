<template>
  <div class="google-maps">
    <div id="gmap" class="gmap"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { Loader, LoaderOptions } from '@googlemaps/js-api-loader'
  export default defineComponent({
    name: 'GoogleMaps',
    setup() {
      const gmap = ref(null)
      const opt: LoaderOptions = {
        apiKey: 'AIzaSyB-jN_GF8wdwqz7Iw121C0BAS9eYsgsv3A',
        // version: 'weekly',
        // libraries: ['places']
      }
      onMounted(() => {
        initMap()
      })
      const initMap = async () => {
        const loader = new Loader(opt)

        const mapOptions = {
          center: {
            lat: 0,
            lng: 0
          },
          zoom: 4
        }

        loader.load().then(() => {
          // @ts-ignore
          new google.maps.Map(document.getElementById('gmap'), mapOptions)
        }).catch(e => {
          console.log(e)
        })

        return {
          initMap
        }
      }
    }
  })
</script>

<style>
.gmap {
  width: 700px;
  height: 500px;
}
</style>

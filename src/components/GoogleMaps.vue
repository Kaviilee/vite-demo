<template>
  <div class="google-maps">
    <div id="gmap" class="gmap"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import initMap from "../utils/googleMaps";
export default defineComponent({
  name: "GoogleMaps",
  setup() {
    const API_KEY: string = process.env.apiKey || "";
    onMounted(() => {
      loadMap();
    });
    const loadMap = () => {
      initMap(document.getElementById("gmap") as HTMLElement, {
        apiKey: API_KEY,
        mapOptions: {
          center: {
            lat: 0,
            lng: 0,
          },
          zoom: 4,
        },
        markerOption: {
          position: {
            lat: 0,
            lng: 0,
          },
        },
      });
    };

    return {
      loadMap,
    };
  },
});
</script>

<style lang="less">
.gmap {
  width: 700px;
  height: 500px;
}
</style>

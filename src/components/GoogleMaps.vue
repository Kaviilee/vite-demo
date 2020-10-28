<template>
  <div class="google-maps">
    <div id="gmap" class="gmap"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { LoaderOptions } from "google-maps";
import GoogleMaps from "../utils/init";
export default defineComponent({
  name: "GoogleMaps",
  setup() {
    const API_KEY: string = process.env.apiKey || "";
    const opt: LoaderOptions = {
      // apiKey: API_KEY,
      version: "weekly",
      libraries: ["places"],
    };
    const mapOptions = {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 4,
    };
    onMounted(() => {
      loadMap();
    });
    const loadMap = () => {
      const maps = new GoogleMaps(
        document.getElementById("gmap") as HTMLElement,
        {
          apiKey: API_KEY,
          loaderOptions: opt,
          mapOptions,
        }
      );
      // addMark(maps);
    };

    const addMark = (maps: GoogleMaps) => {
      maps.createMarker({
        position: {
          lat: 0,
          lng: 0,
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

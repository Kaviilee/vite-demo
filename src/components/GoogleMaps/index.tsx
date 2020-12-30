import { defineComponent, onMounted } from 'vue';
import initMap from '@/utils/googleMaps';

const GoogleMaps = defineComponent({
  setup() {
    const API_KEY: string = process.env.apiKey || '';

    onMounted(() => {
      loadMap();
    });
    const loadMap = () => {
      initMap(document.getElementById('gmap') as HTMLElement, {
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

  render() {
    return (
      <div class="google-maps">
        <div id="gmap" style="width:700px;height:500px"></div>
      </div>
    );
  },
});

export default GoogleMaps;

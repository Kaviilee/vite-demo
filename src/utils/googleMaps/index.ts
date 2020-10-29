import GoogleMapsApi from './GoogleMapsApi';

interface Options {
  apiKey: string;
  mapOptions: google.maps.MapOptions;
  markerOption?: google.maps.MarkerOptions;
}


const initMap = (el: HTMLElement, options: Options) => {
  console.log(el, options)

  const { apiKey } = options
  const gmapApi = new GoogleMapsApi(apiKey);
  // const
  gmapApi.load().then(() => {
    renderMap(el, options)
  })
}

export const renderMap = (el: HTMLElement, options: Options) => {
  const map = new google.maps.Map(el, options.mapOptions);
  console.log(map)

  if (options.markerOption) renderMarker(map, options.markerOption)
}

export const renderMarker = (map: any, markerOption: google.maps.MarkerOptions) => {
  const marker = new google.maps.Marker({
    map,
    ...markerOption
  })

  const infowindow = new google.maps.InfoWindow()

  handleMarkerClick(map, marker, infowindow);
}

export const handleMarkerClick = (map: any, marker: google.maps.Marker, infowindow: google.maps.InfoWindow) => {
  google.maps.event.addListener(marker, 'click', () => {
    infowindow.setContent('test');
    infowindow.open(map, marker)
  })

  google.maps.event.addListener(map, 'click', function(event) {
    if (infowindow) {
      infowindow.close()
    }
  })
}

export default initMap;

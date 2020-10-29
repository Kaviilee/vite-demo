import { Loader } from 'google-maps'

export default class GoogleMaps {
  public el: HTMLElement;
  public options: Options;
  public map: any;
  // public loader: any

  constructor(el: HTMLElement, opts: Options){
    this.el = el;
    this.options = opts;

    this.initMap()
  }

  public initMap = async () => {
    const { apiKey, loaderOptions, mapOptions } = this.options
    const loader = new Loader(apiKey, loaderOptions)
    // this.loader = loader
    const google: any = await loader.load()
    this.map = new google.maps.Map(this.el, mapOptions)
    // this.mark = new google.maps.Marker(this.map)
    // console.log(this.mark)
    new google.maps.Marker({
      map: this.map,
      position: {
        lat: 0,
        lng: 0,
      }
    })
  }

  public createMarker = (marker: google.maps.MarkerOptions) => {
    // this.map.setPosition(marker.position)
    // this.loader.load(() => {
    //   new google.maps.Marker({ map: this.map, ...marker })
    // })
    // this.mark.setPosition(marker.position)
  }
}

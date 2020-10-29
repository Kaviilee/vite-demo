/**
* @exports {GooglrMapsApi}
* @example google = new GoogleMapsApi();
*          google.load().then(() => {})
*/

declare global {
  interface Window {
    _GoogleMapsApi: any
  }
}

export default class GoogleMapsApi {
  public apiKey: string
  public callbackName: string | undefined
  public promise: any;
  public resolve: ((value?: unknown) => void) | undefined;

  constructor(apiKey: string) {
    this.apiKey = apiKey

    if(!window._GoogleMapsApi) {
      this.callbackName = '_GoogleMapsApi.mapLoaded';
      window._GoogleMapsApi = this;
      window._GoogleMapsApi.mapLoaded = this.mapLoaded.bind(this)
    }
  }

  public load = () => {
    if (!this.promise) {
      this.promise = new Promise(resolve => {
        this.resolve = resolve;
      })

      if (typeof window.google === 'undefined') {
        const script = document.createElement('script');
        script.src = `//maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=${this.callbackName}`;
        script.async = true;
        document.head.append(script)
      } else {
        // this.resolve()
      }
    }

    return this.promise
  }


  public mapLoaded = () => {
    if (this.resolve) {
      this.resolve()
    }
  }
}

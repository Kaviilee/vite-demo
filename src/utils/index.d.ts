import { LoaderOptions } from 'google-maps'

declare module 'googlemaps';

export interface Options {
  apiKey: string
  loaderOptions: LoaderOptions
  mapOptions?: google.maps.MapOptions
}

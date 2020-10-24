import {Injectable} from '@angular/core';
import * as L from 'leaflet';

@Injectable({
    providedIn: 'root'
})
export class LayersService {

  private layers: L.TileLayer[] = [];
  private basemapUrls: string[] = [
    'http://mt0.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',    // Google Hybrid
    'http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',      // Google Satellite
    'http://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'       // Google Street
  ];

  constructor() {

    // Basemaps
    this.layers.push(L.tileLayer(this.basemapUrls[0], {
      attribution: '&copy; <a href="https://google.com/maps">Google Maps</a>'
    }));

    // Mapserver
    // this.layers.push(L.tileLayer.wms('http://localhost/gis/maps', {
    //     transparent: true,
    //     format: 'image/png',
    //     attribution: '&copy; <a href="https://firewox.org">Firewox</a>'
    // }));

  }


  public getTileLayers(): L.TileLayer[] {
    return this.layers;
  }


}

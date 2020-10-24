import {
  AfterViewInit,
  Component, ElementRef,
  Input, OnDestroy, OnInit, ViewChild
} from '@angular/core';
import * as L from 'leaflet';
import {LayersService} from './services/layers.service';
import {MapService} from './services/map.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild('map') mapElement: ElementRef;
  @Input() layers: L.Layer[];
  private map: L.Map;

  constructor(private mapService: MapService,
              private layersService: LayersService) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {

    setTimeout(() => {
      // Create map object
      this.map = L.map('map').setView([-17.8252, 31.0335], 10);
      this.mapService.setMap(this.map);

      // Add layers
      this.layersService.getTileLayers().forEach((layer) => {
        this.map.addLayer(layer);
      });

    }, 500);

  }

  ngOnDestroy(): void {

    const res = this.map && this.map.remove();

  }


}

import { Component, OnInit } from '@angular/core';
import {latLng, MapOptions, tileLayer, Map, Marker, icon, CircleMarker, Polygon, popup} from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map!: Map;
  mapOptions!: MapOptions;

  constructor() {
  }

  ngOnInit() {
    this.initializeMapOptions();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
    this.addMapClickListener();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(55.40183860039265, 10.385174356794336),
      zoom: 12,
      layers: [
        tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }

  private addSampleMarker() {
    const marker = new Marker([55.36728652676701, 10.432002935823295])
      .setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png',
          shadowSize: [41, 41]
        })),
      popup = marker.bindPopup('TEK');
    marker.addTo(this.map);

    const marker2 = new CircleMarker([56.15177650929469, 10.17715728097641])
      .setRadius(10)
      .setStyle({color: 'red'})
      .bindPopup('Systematic');
    marker2.addTo(this.map);

    const marker3 = new Polygon([
      [55.39033966538648, 10.405293303667213],
      [55.38972965000248, 10.405517219252708],
      [55.389676560148864, 10.4050130962468],
      [55.390290927843864, 10.404753895989083]])
      .setStyle({color: 'blue'})
      .bindPopup('Kragsjergløkke Kollegiet');
    marker3.addTo(this.map);
  }

  private addMapClickListener() {
    this.map.on('click', (event) => {
      const marker = new Marker(event.latlng)
        .setIcon(
          icon({
            iconSize: [40, 40],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker-pin.png',
            shadowUrl: 'assets/marker-shadow.png',
            shadowSize: [41, 41]}))
      marker.bindPopup('You marked the map at ' + event.latlng.toString());
      marker.addTo(this.map);
      marker.on('click', (event) => {
        this.map.removeLayer(marker);
      });
      marker.openPopup();
    });
  }
}

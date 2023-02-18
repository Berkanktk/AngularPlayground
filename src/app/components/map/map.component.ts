import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {latLng, MapOptions, tileLayer, Map, Marker, icon, CircleMarker, Polygon, GeoJSON} from 'leaflet';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map!: Map;
  mapOptions!: MapOptions;
  place!: string;

  constructor(private http: HttpClient, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.initializeMapOptions();
    this.addGeoJsonLayer();
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
          iconUrl: 'assets/Icons/marker-icon.png',
          shadowUrl: 'assets/Icons/marker-shadow.png',
          shadowSize: [41, 41]
        }))
      .bindPopup('TEK');
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
    marker3.bindPopup('Kragsjergløkke Kollegiet');
    marker3.addTo(this.map);
  }

  private addMapClickListener() {
    this.map.on('click', (event) => {
      const marker = new Marker(event.latlng)
        .setIcon(
          icon({
            iconSize: [40, 40],
            iconAnchor: [13, 41],
            iconUrl: 'assets/Icons/marker-pin.png',
            shadowUrl: 'assets/Icons/marker-shadow.png',
            shadowSize: [41, 41],
            shadowAnchor: [5, 41]}))
        .bindPopup('You marked the map at ' + event.latlng.toString());
      marker.addTo(this.map);
      marker.on('click', (event) => {
        this.map.removeLayer(marker);
      });
      marker.openPopup();
    });
  }

  private addGeoJsonLayer() {
    this.http.get<any>('assets/GeoJSON/DK.json').subscribe(data => {
      const geoJsonLayer = new GeoJSON(data, {
        pane: 'my-geojson-pane',
        style: function (feature) {
          return {
            fillColor: '#ff7800',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.2
          };
        },
        onEachFeature: (feature, layer) => {
          layer.on({
            mouseover: (e) => {
              const layer = e.target;
              //layer.bindPopup(feature.properties.NAME_2).openPopup();
              this.place = feature.properties.NAME_2;
              this.changeDetectorRef.detectChanges();
            },
            mouseout: (e) => {
              const layer = e.target;
              layer.unbindPopup();
              this.place = '';
              this.changeDetectorRef.detectChanges();
            }
          });
        }
      });

    this.map.createPane('my-geojson-pane').style.zIndex = String(200);
    geoJsonLayer.addTo(this.map);
  })}

}

import { Component, AfterViewInit, inject } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements AfterViewInit {
  markerService: MarkerService = inject(MarkerService);
  // Afin d'ajouter la carte intéractive, je me suis aidé grâce à la documentation de Leaflet et de l'API OpenStreetMap.
  // Un tuto est disponible sur le site de DigitalOcean à cette adresse :
  // https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet#step-1-setting-up-the-project
  private map: any;

  // On créé une fonction privée distincte appelée initMap() pour isoler toutes les initialisations de la carte.
  private initMap(): void {
    // Puis on y définit le centre de la carte et la valeur de zoom de départ avec les options de l'API
    this.map = L.map('map', {
      center: [48.866667, 2.333333], // Paris
      zoom: 5,
    });

    // On ajoute une couche de tuiles OpenStreetMap à la carte
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  constructor() {}

  // Appelé après l’initialisation de la vue du composant
  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCityMarkers(this.map);
  }
}

import { Injectable, inject } from '@angular/core';
import * as L from 'leaflet';

import { CityService } from './city.service';
import { PopupService } from './popup.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  // Erreur rencontré: besoin d'info pour résoudre l'erreur...
  // R3InjectorError(Standalone[_HomeComponent])[_MarkerService -> _MarkerService -> _MarkerService -> _HttpClient -> _HttpClient]:
  // NullInjectorError: No provider for _HttpClient!

  // capitals: string = '/assets/data/usa-capitals.geojson';
  // constructor(private http: HttpClient) {}
  // makeCapitalMarkers(map: L.Map): void {
  //   this.http.get(this.capitals).subscribe((res: any) => {
  //     console.log(res);
  //     for (const c of res.features) {
  //       const lon = c.geometry.coordinates[0];
  //       const lat = c.geometry.coordinates[1];
  //       const marker = L.marker([lat, lon]);
  //       marker.addTo(map);
  //     }
  //   });
  // }

  cityService: CityService = inject(CityService);
  popupService: PopupService = inject(PopupService);

  static scaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  // Du coup, on récupère les données en dur dans le service pour afficher les marqueurs sur la carte
  makeCityMarkers(map: L.Map): void {
    const cities = this.cityService.getAllCities();
    const maxPop = Math.max(
      ...cities.map((city) => Number(city.population)),
      0
    );

    // Ajout des marqueurs pour chaque ville
    for (const city of cities) {
      const lat = city.coordinates[0];
      const lon = city.coordinates[1];
      const marker = L.circleMarker([lat, lon], {
        radius: MarkerService.scaledRadius(Number(city.population), maxPop),
      }).addTo(map);
      marker.bindPopup(this.popupService.makeCityPopup(city));
    }

    // Ajout du marqueur pour la position actuelle
    this.getCurrentPosition().subscribe({
      next: (position) => {
        const currentUserLat = position.coords.latitude;
        const currentUserLon = position.coords.longitude;
        const marker = L.marker([currentUserLat, currentUserLon]).addTo(map);
        marker.bindPopup('Tu es ici !');
      },
      error: (error) => {
        console.error('Error getting geolocation:', error);
      },
    });
  }

  getCurrentPosition(): Observable<any> {
    return new Observable((observer) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next(position);
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        );
      } else {
        observer.error('Geolocation is not available in this browser.');
      }
    });
  }
}

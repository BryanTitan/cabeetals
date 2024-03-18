import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  // Du coup, on récupère les données en dur dans le service pour afficher les marqueurs sur la carte
  makeCityMarkers(map: L.Map): void {
    const cities = this.cityService.getAllCities();
    for (const city of cities) {
      const lat = city.coordinates[0];
      const lon = city.coordinates[1];
      const marker = L.circleMarker([lat, lon]).addTo(map);
      marker.bindPopup(this.popupService.makeCityPopup(city));
    }

    this.getCurrentPosition().subscribe({
      next: (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const marker = L.marker([lat, lon]).addTo(map);
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

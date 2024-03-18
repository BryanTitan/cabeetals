import { Injectable } from '@angular/core';
import { City } from './city';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor() {}

  makeCityPopup(data: City): string {
    return (
      `` +
      `<div>${data.isCapital ? 'Capitale' : 'Ville'}: ${data.name}</div>` +
      `<div>Pays: ${data.country}</div>` +
      `<div>Population: ${data.population}</div>`
    );
  }
}

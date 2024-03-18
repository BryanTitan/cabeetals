import { Injectable } from '@angular/core';
import { City } from './city';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  protected cities: City[] = [
    {
      id: 1,
      name: 'Paris',
      country: 'France',
      population: '12,161,542',
      coordinates: [48.8566, 2.3522],
      isCapital: true,
    },
    {
      id: 3,
      name: 'Berlin',
      country: 'Allemagne',
      population: '3,748,148',
      coordinates: [52.52, 13.405],
      isCapital: true,
    },
    {
      id: 6,
      name: 'Bruxelles',
      country: 'Belgique',
      population: '1,208,542',
      coordinates: [50.8503, 4.3517],
      isCapital: true,
    },
    {
      id: 4,
      name: 'Madrid',
      country: 'Espagne',
      population: '3,223,334',
      coordinates: [40.4168, -3.7038],
      isCapital: true,
    },
    {
      id: 5,
      name: 'Rome',
      country: 'Italie',
      population: '2,873,494',
      coordinates: [41.9028, 12.4964],
      isCapital: true,
    },
    {
      id: 2,
      name: 'Manchester',
      country: 'Angleterre',
      population: '8,982,000',
      coordinates: [51.5074, -0.1278],
      isCapital: false,
    },
  ];

  getAllCities(): City[] {
    return this.cities;
  }

  getCityById(id: number): City | undefined {
    return this.cities.find((city) => city.id === id);
  }

  deleteCity(city: City): void {
    this.cities = this.cities.filter((c) => c.id !== city.id);
  }

  addCity(city: City): void {
    this.cities.push(city);
  }
}

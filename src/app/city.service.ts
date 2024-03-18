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
      population: 2140526,
      coordinates: [48.8566, 2.3522],
      isCapital: true,
    },
    {
      id: 2,
      name: 'Manchester',
      country: 'Angleterre',
      population: 545500,
      coordinates: [53.4808, -2.2426],
      isCapital: false,
    },
    {
      id: 3,
      name: 'Berlin',
      country: 'Allemagne',
      population: 3748148,
      coordinates: [52.52, 13.405],
      isCapital: true,
    },
    {
      id: 4,
      name: 'Madrid',
      country: 'Espagne',
      population: 3223334,
      coordinates: [40.4168, -3.7038],
      isCapital: true,
    },
    {
      id: 5,
      name: 'Rome',
      country: 'Italie',
      population: 2872800,
      coordinates: [41.9028, 12.4964],
      isCapital: true,
    },
    {
      id: 6,
      name: 'Bruxelles',
      country: 'Belgique',
      population: 1208542,
      coordinates: [50.8503, 4.3517],
      isCapital: true,
    },
    {
      id: 7,
      name: 'Marseille',
      country: 'France',
      population: 870018,
      coordinates: [43.2962, 5.3696],
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
    let updatedId = this.cities.length + 1;
    const isCityExist = this.cities.find((c) => c.id === updatedId);
    if (isCityExist) updatedId += 1;

    this.cities.push({ ...city, id: updatedId });
  }
}

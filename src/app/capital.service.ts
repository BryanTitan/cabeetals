import { Injectable } from '@angular/core';
import { Capital } from './capital';

@Injectable({
  providedIn: 'root',
})
export class CapitalService {
  protected capitals: Capital[] = [
    {
      id: 1,
      name: 'Paris',
      country: 'France',
      population: '12,161,542',
      coordinates: [48.8566, 2.3522],
    },
    {
      id: 2,
      name: 'London',
      country: 'UK',
      population: '8,982,000',
      coordinates: [51.5074, -0.1278],
    },
    {
      id: 3,
      name: 'Berlin',
      country: 'Germany',
      population: '3,748,148',
      coordinates: [52.52, 13.405],
    },
    {
      id: 4,
      name: 'Madrid',
      country: 'Spain',
      population: '3,223,334',
      coordinates: [40.4168, -3.7038],
    },
    {
      id: 5,
      name: 'Rome',
      country: 'Italy',
      population: '2,873,494',
      coordinates: [41.9028, 12.4964],
    },
  ];

  getAllCapitals(): Capital[] {
    return this.capitals;
  }

  getCapitalById(id: number): Capital | undefined {
    return this.capitals.find((capital) => capital.id === id);
  }
}

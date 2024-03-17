import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { City } from '../city';
import { CityService } from '../city.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <div class="container">
      <div class="list">
        <app-card *ngFor="let city of cities" [city]="city"></app-card>
      </div>
      <div class="button">
        <button class="cssbuttons-io-button">
          Ajouter une ville
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent {
  cities: City[] = [];
  cityService: CityService = inject(CityService);

  constructor() {
    this.cities = this.cityService.getAllCities();
  }
}

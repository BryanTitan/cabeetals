import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from '../map/map.component';
import { City } from '../city';
import { CityService } from '../city.service';
import { CitiesComponent } from '../cities/cities.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MapComponent, CitiesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  screen: number = 1;
  cities: City[] = [];
  cityService: CityService = inject(CityService);

  constructor() {
    this.cities = this.cityService.getAllCities();
  }

  select(selected: number) {
    this.screen = selected;
  }
}

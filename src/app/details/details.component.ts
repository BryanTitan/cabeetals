import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';
import { City } from '../city';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  location: Location = inject(Location);
  cityService = inject(CityService);
  city: City | undefined;

  constructor() {
    const cityId = Number(this.route.snapshot.params['id']);
    this.city = this.cityService.getCityById(cityId);

    if (!this.city) {
      this.city = {
        id: 0,
        name: '',
        country: '',
        population: '',
        coordinates: [0, 0],
        isCapital: false,
      };
    }
  }

  goBack(): void {
    this.location.back();
  }

  onDelete(): void {
    if (this.city) {
      this.cityService.deleteCity(this.city);
      this.goBack();
    }
  }

  onAdd(): void {
    if (this.city) {
      this.cityService.addCity(this.city);
      this.goBack();
    }
  }
}

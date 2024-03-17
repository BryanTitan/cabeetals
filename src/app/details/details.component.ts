import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';
import { City } from '../city';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <h2>{{ capital?.name }}</h2>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  cityService = inject(CityService);
  capital: City | undefined;

  constructor() {
    const capitalId = Number(this.route.snapshot.params['id']);
    this.capital = this.cityService.getCityById(capitalId);
  }
}

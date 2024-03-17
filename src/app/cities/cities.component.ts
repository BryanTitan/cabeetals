import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { City } from '../city';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card">
      <h1>
        {{ city.name }}
      </h1>
      <div class="card__content">
        <p class="card__title">
          {{ city.isCapital ? 'Capital :' : 'Ville :' }} {{ city.name }}
        </p>
        <p class="card__description">
          {{ city.country }}
          <br />
          Population: {{ city.population }}
          <br />
          Coordonnées : [{{ city.coordinates[0] }}, {{ city.coordinates[1] }}]
        </p>
        <a
          class="card__link"
          [routerLink]="['/details', city.id]"
          routerLinkActive="active"
          >Modifier</a
        >
      </div>
    </div>
  `,
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent {
  @Input() city!: City;
}

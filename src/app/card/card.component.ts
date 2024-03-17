import { Component, Input } from '@angular/core';
import { City } from '../city';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],

  template: `<div class="card">
    <h1>
      {{ city.name }}
    </h1>
    <div class="content">
      <p class="title">
        {{ city.isCapital ? 'Capital :' : 'Ville :' }} {{ city.name }}
      </p>
      <p class="description">
        {{ city.country }}
        <br />
        Population: {{ city.population }}
        <br />
        Coordonnées : [{{ city.coordinates[0] }}, {{ city.coordinates[1] }}]
      </p>
      <a
        class="link"
        [routerLink]="['/details', city.id]"
        routerLinkActive="active"
        >Modifier</a
      >
    </div>
  </div>`,
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() city!: City;
}

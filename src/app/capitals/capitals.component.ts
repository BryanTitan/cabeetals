import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Capital } from '../capital';

@Component({
  selector: 'app-capitals',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card">
      <h1>
        {{ capital.name }}
      </h1>
      <div class="card__content">
        <p class="card__title">{{ capital.name }}</p>
        <p class="card__description">
          {{ capital.country }}
          <br />
          Population: {{ capital.population }}
          <br />
          Coordonnées : [{{ capital.coordinates[0] }},
          {{ capital.coordinates[1] }}]
        </p>
        <a
          class="card__link"
          [routerLink]="['/details', capital.id]"
          routerLinkActive="active"
          >Modifier</a
        >
      </div>
    </div>
  `,
  styleUrls: ['./capitals.component.css'],
})
export class CapitalsComponent {
  @Input() capital!: Capital;
}

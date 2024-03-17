import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapitalService } from '../capital.service';
import { Capital } from '../capital';

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
  capitalService = inject(CapitalService);
  capital: Capital | undefined;

  constructor() {
    const capitalId = Number(this.route.snapshot.params['id']);
    this.capital = this.capitalService.getCapitalById(capitalId);
  }
}

import { CapitalService } from './../capital.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from '../map/map.component';
import { CapitalsComponent } from '../capitals/capitals.component';
import { Capital } from '../capital';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MapComponent, CapitalsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  screen: number = 1;
  capitals: Capital[] = [];
  capitalService: CapitalService = inject(CapitalService);

  constructor() {
    this.capitals = this.capitalService.getAllCapitals();
  }

  select(selected: number) {
    this.screen = selected;
  }
}

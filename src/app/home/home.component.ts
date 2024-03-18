import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from '../map/map.component';
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

  select(selected: number) {
    this.screen = selected;
  }
}

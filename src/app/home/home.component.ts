import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { MapComponent } from '../map/map.component';
import { CapitalsComponent } from '../capitals/capitals.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapComponent, CapitalsComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  screen: number = 1;

  select(selected: number) {
    this.screen = selected;
  }
}

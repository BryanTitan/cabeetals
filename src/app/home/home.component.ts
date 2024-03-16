import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { CapitalsComponent } from '../capitals/capitals.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapComponent, CapitalsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}

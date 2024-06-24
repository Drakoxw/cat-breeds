import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent, NavBarComponent } from '..';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  date = new Date()
}

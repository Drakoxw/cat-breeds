import { Component, inject, HostListener, OnDestroy } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  NavigationEnd,
} from '@angular/router';
import { Subscription } from 'rxjs';

const ROUTES = [
  {
    label: 'Home',
    path: '/home',
  },
  {
    label: 'Razas',
    path: '/list-breeds',
  },
];

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnDestroy {
  showMenuMovile = false;
  routes = ROUTES;
  #router = inject(Router);

  #subs: Subscription[] = [];

  constructor() {
    this.#subs.push(
      this.#router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && this.showMenuMovile) {
          this.showMenuMovile = false;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.#subs.forEach((sub) => sub.unsubscribe());
  }
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth > 768 && this.showMenuMovile) {
      this.showMenuMovile = false;
    }
  }

  toggleMenu() {
    this.showMenuMovile = !this.showMenuMovile;
  }
}

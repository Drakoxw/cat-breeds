import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  template: `
    <section class="w-full h-full center-all">
      <div
        class="inline-flex cursor-not-allowed items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold leading-6 text-primary-foreground shadow transition duration-150 ease-in-out"
      >
        Loading...
      </div>
    </section>
  `,
})
export class LoadingComponent {}

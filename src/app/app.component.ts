import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastAlertService } from '@services/index';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  toastService = inject(ToastAlertService);
  title = 'CatBreeds';

  ngOnInit(): void {
    this.toastService.info('Toast Alert ok')
  }

}

import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreedsService } from '@services/index';

@Component({
  selector: 'app-breed-detail',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './breed-detail.component.html'
})
export class BreedDetailComponent {
  readonly breedsService = inject(BreedsService);
  breed = this.breedsService.breed
}

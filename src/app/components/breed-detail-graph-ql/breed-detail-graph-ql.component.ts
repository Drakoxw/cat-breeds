import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreedGraphQlService } from '@services/breed-graph-ql.service';

@Component({
  selector: 'app-breed-detail-graph-ql',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './breed-detail-graph-ql.component.html'
})
export class BreedDetailGraphQLComponent {
  readonly breedsService = inject(BreedGraphQlService);
  breed = this.breedsService.breed
}

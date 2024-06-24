import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { InputSearchComponent } from '@components/index';

@Component({
  selector: 'app-list-breeds',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    InputSearchComponent
  ],
  templateUrl: './list-breeds.component.html',
  styleUrl: './list-breeds.component.css'
})
export class ListBreedsComponent {

}

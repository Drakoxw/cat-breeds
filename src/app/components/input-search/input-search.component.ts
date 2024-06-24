import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-search.component.html',
})
export class InputSearchComponent {
  @Output() valueChange = new EventEmitter<string>();
  value = '';

  onChage() {
    this.valueChange.emit(this.value);
  }

  clearInput() {
    this.value = '';
    this.onChage();
  }
}

import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

type ModalType = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input({ required: true }) show: boolean = false;
  @Input() title: string = 'Modal';
  @Input() text: string = '';
  @Input() icon?: ModalType;
  @Input({ transform: booleanAttribute }) showCancelButton: boolean = false;
  @Input({ transform: booleanAttribute }) showConfirmButton: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  onClose() {
    this.close.emit()
  }

  onConfirm() {
    this.confirm.emit()
    this.close.emit()
  }

}

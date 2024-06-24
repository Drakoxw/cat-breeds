
import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  @Output() nextPage = new EventEmitter<number>();
  @Output() prevPage = new EventEmitter<number>();
  @Output() goToPage = new EventEmitter<number>();
  _page: number = 1;
  _total: number = 0;
  limit = input<number>(10);
  pages: number[] = [];

  private maxVisiblePages: number = 3;

  @Input() set total(value: number) {
    this._total = value;
    this.definePages();
  }

  @Input() set page(value: number) {
    this._page = value;
    this.definePages();
  }

  ngOnInit(): void {
    this.definePages();
  }

  get _totalPages(): number {
    return Math.ceil(this._total / this.limit());
  }

  get visiblePages(): number[] {
    const pages: number[] = [];
    const currentPage = this._page;
    const totalPages = this._totalPages;
    const halfMaxVisiblePages = Math.floor(this.maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfMaxVisiblePages);
    let endPage = Math.min(totalPages, currentPage + halfMaxVisiblePages);

    if (currentPage <= halfMaxVisiblePages) {
      startPage = 1;
      endPage = Math.min(totalPages, this.maxVisiblePages);
    } else if (currentPage > totalPages - halfMaxVisiblePages) {
      startPage = Math.max(1, totalPages - this.maxVisiblePages + 1);
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }
  shouldShowFirstPage(): boolean {
    return this._totalPages > this.maxVisiblePages && this._page > Math.floor(this.maxVisiblePages / 2) + 1;
  }
  shouldShowLeftEllipsis(): boolean {
    return this._totalPages > this.maxVisiblePages && this._page > Math.floor(this.maxVisiblePages / 2) + 2;
  }
  shouldShowRightEllipsis(): boolean {
    return this._totalPages > this.maxVisiblePages && this._page < this._totalPages - Math.floor(this.maxVisiblePages / 2) - 1;
  }

  shouldShowLastPage(): boolean {
    return this._totalPages > this.maxVisiblePages && this._page < this._totalPages - Math.floor(this.maxVisiblePages / 2);
  }

  onNext() {
    if (this._page < this._totalPages) {
      this._page++;
      this.nextPage.emit(this._page);
      this.definePages();
    }
  }

  onPrev() {
    if (this._page > 1) {
      this._page--;
      this.prevPage.emit(this._page);
      this.definePages();
    }
  }

  goTo(page: number) {
    if (page >= 1 && page <= this._totalPages) {
      this._page = page;
      this.goToPage.emit(page);
      this.definePages();
    }
  }

  definePages() {
    if (this._total > 0 && this.limit() > 0) {
      this.pages = Array.from({ length: this._totalPages }, (_, i) => i + 1);
    }
  }
}

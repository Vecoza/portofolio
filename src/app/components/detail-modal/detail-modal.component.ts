import {
  Component, Input, Output, EventEmitter,
  OnInit, OnDestroy, HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DetailItem {
  type: 'project' | 'experience' | 'education';
  title: string;
  subtitle: string;
  period?: string;
  location?: string;
  description: string;
  longDescription?: string;
  tech?: string[];
  highlights?: string[];
  links?: { label: string; url: string }[];
  accentColor?: string;
  icon?: string;
}

@Component({
  selector: 'app-detail-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit, OnDestroy {
  @Input() item: DetailItem | null = null;
  @Output() close = new EventEmitter<void>();
  isOpen = false;

  ngOnInit() {
    requestAnimationFrame(() => setTimeout(() => this.isOpen = true, 10));
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    this.close.emit();
  }

  onBackdropClick(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close.emit();
    }
  }
}
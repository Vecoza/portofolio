import { Injectable, OnDestroy } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollRevealService implements OnDestroy {
  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
  }

  observe(el: HTMLElement) {
    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}

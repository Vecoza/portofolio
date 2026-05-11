import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { ScrollRevealService } from '../services/scroll-reveal.service';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit {
  @Input() delay: number = 0;

  constructor(private el: ElementRef, private scrollReveal: ScrollRevealService) {}

  ngOnInit() {
    const el = this.el.nativeElement as HTMLElement;
    el.classList.add('reveal');
    if (this.delay) {
      el.style.transitionDelay = `${this.delay}s`;
    }
    this.scrollReveal.observe(el);
  }
}

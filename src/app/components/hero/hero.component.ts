import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  role = '';
  photoY = 0;
  imgY = 0;
  b1Y = 0;
  b2Y = 0;

  private roles = ['Software Developer', 'Angular Engineer', 'Full-Stack Builder'];
  private ri = 0;
  private typing = true;
  private ci = 0;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {}

  @HostListener('window:scroll')
  onScroll() {
    const s = window.scrollY;
    this.photoY = s * -0.14;
    this.imgY = s * 0.04;
    this.b1Y = s * -0.05;
    this.b2Y = s * 0.04;
  }

  private type() {
    const r = this.roles[this.ri];
    if (this.typing) {
      if (this.ci < r.length) {
        this.role = r.slice(0, ++this.ci);
        setTimeout(() => this.type(), 80);
      } else {
        this.typing = false;
        setTimeout(() => this.type(), 2200);
      }
    } else {
      if (this.ci > 0) {
        this.role = r.slice(0, --this.ci);
        setTimeout(() => this.type(), 40);
      } else {
        this.ri = (this.ri + 1) % this.roles.length;
        this.typing = true;
        setTimeout(() => this.type(), 300);
      }
    }
  }

  go(e: Event, id: string) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
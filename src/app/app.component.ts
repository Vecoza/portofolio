import {
  Component, OnInit, OnDestroy, HostListener,
  ElementRef, ViewChild, AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WhyHireComponent } from './components/why-hire/why-hire.component';
import { ContactComponent } from './components/contact/contact.component';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number; alpha: number;
  baseAlpha: number; phase: number; speed: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, NavComponent, HeroComponent, AboutComponent,
    ExperienceComponent, ProjectsComponent, SkillsComponent,
    WhyHireComponent, ContactComponent
  ],
  template: `
    <div class="cursor" [style.left.px]="cx" [style.top.px]="cy"></div>
    <div class="cursor-ring" [class.hovering]="hovering"
         [style.left.px]="rx" [style.top.px]="ry"></div>

    <canvas #canvas class="particle-canvas"></canvas>

    <app-nav></app-nav>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-skills></app-skills>
      <app-why-hire></app-why-hire>
      <app-contact></app-contact>
    </main>
    <div class="grain" aria-hidden="true"></div>
  `,
  styles: [`
    main { position: relative; }
    .particle-canvas {
      position: fixed; inset: 0; z-index: 0;
      width: 100%; height: 100%; pointer-events: none;
    }
    .grain {
      position: fixed; inset: 0; pointer-events: none; z-index: 200;
      opacity: .025;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 200px;
    }
  `]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  cx = 0; cy = 0; rx = 0; ry = 0; hovering = false;
  private tx = 0; private ty = 0;
  private mx = 0; private my = 0; 
  private scrollY = 0;
  private rafId = 0;
  private particles: Particle[] = [];
  private ctx!: CanvasRenderingContext2D;
  private W = 0; private H = 0;

  ngAfterViewInit() {
    const c = this.canvasRef.nativeElement;
    this.ctx = c.getContext('2d')!;
    this.onResize();
    this.spawnParticles();
    this.loop();
  }

  ngOnDestroy() { cancelAnimationFrame(this.rafId); }

  @HostListener('window:resize') onResize() {
    const c = this.canvasRef.nativeElement;
    this.W = c.width = window.innerWidth;
    this.H = c.height = window.innerHeight;
    this.spawnParticles();
  }

  @HostListener('window:scroll') onScroll() { this.scrollY = window.scrollY; }

  @HostListener('mousemove', ['$event'])
  onMouse(e: MouseEvent) {
    this.cx = e.clientX; this.cy = e.clientY;
    this.tx = e.clientX; this.ty = e.clientY;
    this.mx = e.clientX / this.W - 0.5;
    this.my = e.clientY / this.H - 0.5;
    this.hovering = !!(e.target as HTMLElement).closest('a,button,[role=button],.hoverable');
  }

  private spawnParticles() {
    const n = Math.min(Math.floor(this.W * this.H / 4800), 280);
    this.particles = Array.from({ length: n }, () => {
      const r = Math.random() * 1.6 + 0.3;
      return {
        x: Math.random() * this.W, y: Math.random() * this.H,
        vx: (Math.random() - .5) * 0.08, vy: (Math.random() - .5) * 0.08,
        r, baseAlpha: Math.random() * 0.45 + 0.08,
        alpha: 0, phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.008 + 0.003,
      };
    });
  }

  private loop() {
    let frame = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const MOUSE_RADIUS = 140;

    const tick = () => {
      frame++;
   
      this.rx = lerp(this.rx, this.tx, 0.11);
      this.ry = lerp(this.ry, this.ty, 0.11);

      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.W, this.H);

  
      const scrollFrac = this.scrollY / Math.max(document.body.scrollHeight - this.H, 1);
      const blobY1 = this.H * 0.25 - scrollFrac * 200;
      const blobY2 = this.H * 0.72 + scrollFrac * 100;

      const g1 = ctx.createRadialGradient(this.W * .72, blobY1, 0, this.W * .72, blobY1, 380);
      g1.addColorStop(0, 'rgba(124,106,247,0.04)'); g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1; ctx.fillRect(0, 0, this.W, this.H);

      const g2 = ctx.createRadialGradient(this.W * .18, blobY2, 0, this.W * .18, blobY2, 280);
      g2.addColorStop(0, 'rgba(106,247,200,0.028)'); g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2; ctx.fillRect(0, 0, this.W, this.H);

   
      for (const p of this.particles) {
        
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = this.W; if (p.x > this.W) p.x = 0;
        if (p.y < 0) p.y = this.H; if (p.y > this.H) p.y = 0;

        
        const scrollShift = (this.scrollY * p.r * 0.018) % this.H;
        const dy = (p.y - scrollShift + this.H) % this.H;

     
        const msx = this.mx * this.W + this.W / 2;
        const msy = this.my * this.H + this.H / 2;
        const dx = p.x - msx, ddx = dy - msy;
        const dist = Math.sqrt(dx * dx + ddx * ddx);
        let ox = 0, oy = 0;
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * 4;
          ox = (dx / dist) * force;
          oy = (ddx / dist) * force;
        }

      
        const tw = Math.sin(frame * p.speed + p.phase) * 0.3 + 0.7;
        p.alpha = lerp(p.alpha, p.baseAlpha * tw, 0.05);

        ctx.beginPath();
        ctx.arc(p.x + ox, dy + oy, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210,215,255,${p.alpha})`;
        ctx.fill();

   
        if (p.r > 1.3) {
          ctx.beginPath();
          ctx.arc(p.x + ox, dy + oy, p.r * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180,160,255,${p.alpha * 0.1})`;
          ctx.fill();
        }
      }


      const msx = this.mx * this.W + this.W / 2;
      const msy = this.my * this.H + this.H / 2;
      for (let i = 0; i < this.particles.length; i++) {
        const a = this.particles[i];
        for (let j = i + 1; j < this.particles.length; j++) {
          const b = this.particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > 80) continue;
          const da = Math.hypot(a.x - msx, a.y - msy);
          const db = Math.hypot(b.x - msx, b.y - msy);
          if (da > 200 && db > 200) continue;
          const alpha = (1 - d / 80) * 0.12;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(124,106,247,${alpha})`;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }

      this.rafId = requestAnimationFrame(tick);
    };
    tick();
  }
}

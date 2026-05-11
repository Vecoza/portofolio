import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface Reason {
  title: string;
  body: string;
  accent: string;
  num: string;
}

@Component({
  selector: 'app-why-hire',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './why-hire.component.html',
  styleUrls: ['./why-hire.component.scss']
})
export class WhyHireComponent {
  reasons: Reason[] = [
    {
      num: '01',
      accent: '#7c6af7',
      title: 'Outcome-focused mindset',
      body: 'I don\'t just close tickets — I think about why a feature is being built. Every line of code I ship is tied to a real user need or business goal.'
    },
    {
      num: '02',
      accent: '#f7a26a',
      title: 'Fast learner, always shipping',
      body: 'From Angular to SignalR to ML.NET, I pick up new technologies and apply them in production-grade projects. Four full-stack apps shipped before graduating.'
    },
    {
      num: '03',
      accent: '#6af7c8',
      title: 'Design meets engineering',
      body: 'I care deeply about UX. Interfaces I build are functional, responsive, and genuinely pleasant to use — not just technically correct.'
    },
    {
      num: '04',
      accent: '#f7e06a',
      title: 'Proven team player',
      body: 'Six months at ZenDev in agile sprints — daily stand-ups, code reviews with senior devs, and delivering real client-facing features on schedule.'
    },
    {
      num: '05',
      accent: '#c87cf7',
      title: 'Full-stack confidence',
      body: 'Equally comfortable in a .NET Core API as in an Angular component. I bridge frontend and backend without the friction of a siloed specialist.'
    },
    {
      num: '06',
      accent: '#6af7f7',
      title: 'Ready from day one',
      body: 'Internship experience, a diverse tech stack, and multiple shipped projects mean I can contribute meaningfully from the very first week.'
    },
  ];
}
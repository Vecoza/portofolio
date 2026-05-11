import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface Project {
  num: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  accent: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  active: number | null = null;

  projects: Project[] = [
    {
      num: '01',
      name: 'ZenFood',
      tagline: 'Real-time group food ordering',
      accent: '#7c6af7',
      description: 'A collaborative ordering system where teams order food together in real time. SignalR keeps every group member in sync instantly — no refresh needed. Auth supports JWT and Google OAuth, and the UI is responsive across all devices.',
      tech: ['Angular', '.NET Core', 'SignalR', 'TypeScript', 'Angular Material', 'Tailwind', 'JWT', 'MySQL'],
      highlights: [
        'Real-time group ordering via SignalR WebSockets',
        'JWT + Google OAuth authentication',
        'Order management, item tracking & user profiles',
        'Transaction history & receipt generation'
      ],
      githubUrl: 'https://github.com/Vecoza',
    },
    {
      num: '02',
      name: 'VolanGO',
      tagline: 'Full-stack vehicle rental',
      accent: '#f7a26a',
      description: 'End-to-end rent-a-car platform. Customers search by availability, reserve, pay via Stripe, and receive instant confirmations. Backend modules handle fleet, reservations, payments, and customer support cleanly.',
      tech: ['ASP.NET Core', 'Angular', 'PostgreSQL', 'Stripe', 'SendGrid', 'Twilio'],
      highlights: [
        'Full booking flow: search → reserve → pay',
        'Stripe payments with invoice generation',
        'SMS & email via Twilio & SendGrid',
        'Damage reports, reviews & admin panel'
      ],
      githubUrl: 'https://github.com/Vecoza',
    },
    {
      num: '03',
      name: 'RoomWise',
      tagline: 'Hotel booking with AI recommendations',
      accent: '#6af7c8',
      description: 'Hotel platform with guest and admin portals. The AI recommendation engine built with ML.NET analyses booking history to suggest rooms each guest is likely to enjoy.',
      tech: ['Angular', '.NET Core', 'ML.NET', 'PostgreSQL', 'EF Core'],
      highlights: [
        'AI recommendations via ML.NET collaborative filtering',
        'Separate guest & admin portals',
        'Clean architecture backend',
        'Calendar-based booking management'
      ],
      githubUrl: 'https://github.com/Vecoza',
    },
    {
      num: '04',
      name: 'ZombieSurvival',
      tagline: 'Unity 3D survival game',
      accent: '#f76a6a',
      description: 'Third-person survival shooter in Unity with C#. Player controller, enemy AI via NavMesh pathfinding, behaviour trees, object pooling and wave-based spawning.',
      tech: ['Unity', 'C#', 'NavMesh AI', 'OOP Design'],
      highlights: [
        'Player movement, combat & health systems',
        'Enemy AI with NavMesh & behaviour tree',
        'Object pooling for performance',
        'Wave-based enemy spawning'
      ],
      githubUrl: 'https://github.com/Vecoza',
    },
  ];
}
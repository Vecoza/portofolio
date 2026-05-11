import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { DetailModalComponent, DetailItem } from '../detail-modal/detail-modal.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective, DetailModalComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  activeItem: DetailItem | null = null;

  openModal(item: DetailItem) {
    this.activeItem = item;
  }

  closeModal() {
    this.activeItem = null;
  }

  experiences = [
    {
      company: 'ZenDev',
      role: 'Software Development Intern',
      period: 'Mar 2025 – Aug 2025',
      type: 'Internship',
      description: 'Full-stack web development on real-world applications. Clean architecture, agile collaboration, production-quality code.',
      tech: ['C#', '.NET Core', 'ASP.NET', 'Angular', 'TypeScript', 'MySQL', 'EF Core', 'Git'],
      detail: {
        type: 'experience' as const,
        title: 'ZenDev',
        subtitle: 'Software Development Intern',
        period: 'Mar 2025 – Aug 2025',
        location: 'Bosnia & Herzegovina',
        accentColor: '#7c6af7',
        icon: '💼',
        description: 'Full-stack web development internship.',
        longDescription: 'At ZenDev I joined as a Software Development Intern and worked across the full stack using .NET Core and Angular. I built and improved real-world application features following clean architecture principles — keeping business logic separate from infrastructure concerns. I collaborated daily with senior developers through Git-based workflows, participated actively in code reviews, and contributed to sprint planning in an agile environment. I gained hands-on experience integrating REST APIs, working with MySQL databases through Entity Framework Core, and handling frontend-backend communication efficiently.',
        tech: ['C#', '.NET Core', 'ASP.NET Web API', 'Angular', 'TypeScript', 'MySQL', 'Entity Framework Core', 'Git', 'REST APIs'],
        highlights: [
          'Built & improved production features in .NET Core and Angular',
          'Participated in agile sprints, stand-ups & sprint reviews',
          'Wrote and reviewed code with senior developers',
          'Integrated REST APIs and handled DB migrations with EF Core',
          'Debugged and fixed issues across the full stack',
          'Gained experience in frontend-backend communication patterns',
        ],
      }
    }
  ];

  education = [
    {
      institution: 'University Džemal Bijedić',
      degree: 'BSc Computer Software Engineering',
      period: 'Sep 2022 – Feb 2026',
      location: 'Mostar, Bosnia and Herzegovina',
      modules: ['Web Dev', 'OOP', 'Databases', '.NET', 'Flutter', 'Unity3D', 'IoT', 'Cybersecurity'],
      detail: {
        type: 'education' as const,
        title: 'University Džemal Bijedić of Mostar',
        subtitle: 'BSc Computer Software Engineering',
        period: 'Sep 2022 – Feb 2026',
        location: 'Mostar, Bosnia and Herzegovina',
        accentColor: '#6af7c8',
        icon: '🎓',
        description: 'Bachelor\'s degree in Computer Software Engineering.',
        longDescription: 'During my four-year Bachelor\'s programme at University Džemal Bijedić I covered a wide breadth of software engineering topics — from low-level programming and algorithms to full-stack web development and AI. The curriculum combined theoretical foundations with hands-on project work, which is where I built most of my portfolio projects. Key areas included web technologies (HTML, CSS, JavaScript, Angular), object-oriented programming in C++ and C#, databases with MySQL and PostgreSQL, .NET development, mobile apps with Flutter, game development with Unity3D, IoT with Arduino, and cybersecurity fundamentals.',
        tech: ['Web Development', 'OOP (C++, C#)', '.NET Development', 'Databases (MySQL, PostgreSQL)', 'Flutter (Mobile)', 'Unity3D (Game Dev)', 'Arduino / IoT', 'Cybersecurity', 'Algorithms & Data Structures'],
        highlights: [
          'Graduated with BSc in Computer Software Engineering',
          'Built 4+ full-stack projects during studies',
          'Covered frontend, backend, mobile, game dev & IoT',
          'Applied academic knowledge in real internship at ZenDev',
          'Completed capstone projects in .NET and Angular',
        ],
      }
    },
    {
      institution: 'High School of Electrical Engineering',
      degree: 'Electrical Technician — Automatics & Electronics',
      period: 'Sep 2018 – Jun 2022',
      location: 'Sarajevo, Bosnia and Herzegovina',
      modules: ['Automation', 'Robotics', 'Electronics', 'Programming', 'IoT'],
      detail: {
        type: 'education' as const,
        title: 'High School of Electrical Engineering Sarajevo',
        subtitle: 'Electrical Technician — Automatics & Electronics',
        period: 'Sep 2018 – Jun 2022',
        location: 'Sarajevo, Bosnia and Herzegovina',
        accentColor: '#f7a26a',
        icon: '⚙️',
        description: 'Technical high school with focus on automatics, electronics, and programming.',
        longDescription: 'This technical high school gave me a strong foundation in electrical engineering and early programming exposure. I studied automation systems, robotics, analogue and digital electronics, and introductory programming. My IoT coursework introduced me to Arduino-based hardware projects, which sparked my interest in the intersection of software and physical systems. This background in low-level thinking and hardware understanding has made me a more rounded developer — I understand what happens below the abstraction layers.',
        tech: ['Automation Systems', 'Robotics', 'Electronics', 'Programming Basics', 'Arduino / IoT'],
        highlights: [
          'Studied automation, robotics & electronics for 4 years',
          'Introduced to programming through C-based Arduino projects',
          'Built hardware-software IoT projects',
          'Developed systematic, analytical problem-solving approach',
        ],
      }
    }
  ];
}
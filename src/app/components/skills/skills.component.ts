import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface Skill { name: string; }
interface Group { label: string; color: string; skills: Skill[]; }

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  tab = 0;

  groups: Group[] = [
    { label: 'Frontend', color: '#7c6af7', skills: [
      {name:'Angular'},{name:'TypeScript'},{name:'HTML5'},{name:'CSS3 / SCSS'},
      {name:'Angular Material'},{name:'Tailwind CSS'},{name:'JavaScript'},
    ]},
    { label: 'Backend', color: '#f7a26a', skills: [
      {name:'C#'},{name:'.NET Core'},{name:'ASP.NET Web API'},
      {name:'SignalR'},{name:'REST APIs'},{name:'Entity Framework'},
    ]},
    { label: 'Databases', color: '#6af7c8', skills: [
      {name:'MySQL'},{name:'PostgreSQL'},{name:'Redis'},
    ]},
    { label: 'Tools', color: '#c87cf7', skills: [
      {name:'Git'},{name:'Visual Studio'},{name:'JetBrains IDEs'},
      {name:'Stripe'},{name:'SendGrid'},{name:'Twilio'},
    ]},
    { label: 'Other', color: '#f7e06a', skills: [
      {name:'Flutter'},{name:'Unity3D'},{name:'ML.NET'},{name:'Arduino / IoT'},{name:'Agile / Scrum'},
    ]},
  ];

  langs = [
    { name: 'English',  pct: 85, label: 'Professional', color: '#7c6af7' },
    { name: 'Bosnian',  pct: 100, label: 'Native',      color: '#6af7c8' },
  ];
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss'
})
export class HomeHeroComponent {
  // Definimos la propiedad 'stats' que el HTML está buscando
  stats = [
    { value: '10M+', label: 'Happy Learners' },
    { value: '500+', label: 'Native Tutors' },
    { value: '30+', label: 'Languages' },
    { value: '98%', label: 'Success Rate' }
  ];

  constructor() { }
}

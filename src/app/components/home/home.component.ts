import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpactSectionComponent } from '../impact-section/impact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ImpactSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Mock Data for the View
  stats = [
    { value: '50k+', label: 'Active Students' },
    { value: '120+', label: 'Countries' },
    { value: '4.9', label: 'App Store Rating' }
  ];

  features = [
    { title: '1-on-1 Tutoring', desc: 'Personalized lessons with certified experts.', icon: 'bi-person-video3' },
    { title: 'Group Classes', desc: 'Dynamic learning with peers worldwide.', icon: 'bi-people' },
    { title: 'Corporate Training', desc: 'Upskill your entire workforce efficiently.', icon: 'bi-building' }
  ];

  tutors = [
    { name: 'Emma Watson', lang: 'English', img: 'assets/tutor1.jpg', rating: 5.0 },
    { name: 'Jean-Pierre', lang: 'French', img: 'assets/tutor2.jpg', rating: 4.9 },
    { name: 'Sofia Vergara', lang: 'Spanish', img: 'assets/tutor3.jpg', rating: 4.8 },
  ];
}
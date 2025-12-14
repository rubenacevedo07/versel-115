import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-impact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impact-section.component.html',
  styleUrls: ['./impact-section.component.scss']
})
export class ImpactSectionComponent implements AfterViewInit {
  stats = [
    { label: 'Qualified Teachers', value: 200, suffix: '+', current: 0 },
    { label: 'Active Students', value: 12, suffix: 'k+', current: 0 }, // Changed 12T to 12k for realism
    { label: '5-Star Ratings', value: 500, suffix: '+', current: 0 },
    { label: 'Years of Excellence', value: 5, suffix: '', current: 0 }
  ];

  @ViewChildren('statItem') statItems!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            this.animateCount(index);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      this.statItems.forEach((item) => observer.observe(item.nativeElement));
    }
  }

  animateCount(index: number) {
    const target = this.stats[index].value;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      this.stats[index].current = Math.min(Math.floor(increment * currentStep), target);
      if (currentStep >= steps) clearInterval(timer);
    }, duration / steps);
  }
}
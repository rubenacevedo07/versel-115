
import { Component, AfterViewInit } from '@angular/core';

declare var Calendly: any;

@Component({
  selector: 'app-calendly-widget',
  imports: [],
  standalone: true,
  templateUrl: './calendly-widget.component.html',
  styleUrl: './calendly-widget.component.scss'
})

export class CalendlyWidgetComponent implements AfterViewInit {
  ngAfterViewInit() {
    Calendly.initInlineWidgets();

  }
}
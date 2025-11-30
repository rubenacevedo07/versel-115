import { Component, OnInit } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<WeatherForecast[]>('https://render1125.onrender.com/weatherforecast')
      .subscribe({
        next: (data) => this.forecasts = data,
        error: (err) => console.error('Error fetching weather data', err)
      });
  }
}

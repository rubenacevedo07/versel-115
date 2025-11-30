import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'weather', component: WeatherComponent },
    { path: '', component: AppComponent, pathMatch: 'full' }
];

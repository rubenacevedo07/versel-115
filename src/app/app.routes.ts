import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'weather', component: WeatherComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    // This tells Angular: "When the URL is empty (root), show Home"
    { path: '', component: HomeComponent },
    // Optional: Redirect unknown URLs back to Home
    { path: '**', redirectTo: '' }
];

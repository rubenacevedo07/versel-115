import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'weather', component: WeatherComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];

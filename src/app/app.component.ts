import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; // <--- Import these
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent], // <--- Add to imports array
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Talkio';

  constructor(private translate: TranslateService) {
    const browserLang = navigator.language.split('-')[0]; // "es", "en", etc. 
    translate.addLangs(['en', 'es']);
    translate.setFallbackLang('en');
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

}
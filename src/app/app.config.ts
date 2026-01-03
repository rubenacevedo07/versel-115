import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';

import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),

    // Configuración moderna y limpia
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/', // Ruta a tus archivos JSON
        suffix: '.json'
      }),
      fallbackLang: 'en'
    })
  ]
};

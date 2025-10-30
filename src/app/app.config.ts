import {
  ApplicationConfig,
  LOCALE_ID,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { IconService } from './services/icon.service';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl-BE';
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

registerLocaleData(localeNl);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    IconService,
    provideHttpClient(withInterceptorsFromDi()),
    { provide: LOCALE_ID, useValue: 'nl-BE' },
    provideLottieOptions({ player: () => player }),
  ],
};

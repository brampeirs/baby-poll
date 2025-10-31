import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeNl from '@angular/common/locales/nl-BE';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { IconService } from './services/icon.service';

registerLocaleData(localeNl);

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    provideLottieOptions({ player: () => player }),
    { provide: LOCALE_ID, useValue: 'nl-BE' },
    IconService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}

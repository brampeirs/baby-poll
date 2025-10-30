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
registerLocaleData(localeNl);

import { provideLottieOptions } from 'ngx-lottie';
import { IconService } from './services/icon.service';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}
@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideLottieOptions({
      player: () => player,
    }),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'nl-BE',
    },
    IconService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}

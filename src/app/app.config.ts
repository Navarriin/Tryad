import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(),
  ],
};

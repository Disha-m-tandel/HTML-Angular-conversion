import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { mockApiInterceptor } from './core/interceptors/mock-api.interceptor';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
  provideHttpClient(
      withInterceptors([mockApiInterceptor])
    ),
     provideCharts(
      withDefaultRegisterables()
    )
  ]
};

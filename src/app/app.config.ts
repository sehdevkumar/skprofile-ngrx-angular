import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { RouterModule, provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideAnimations } from '@angular/platform-browser/animations'
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http'
import { StoreModule, provideStore } from '@ngrx/store'
import { applicationFeatureKey, applicationReducer } from './store/reducers'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreRouterConnectingModule, provideRouterStore, routerReducer } from '@ngrx/router-store'
import { EffectsModule } from '@ngrx/effects'
import { ApplicationEffects } from './store/effects'
import { CustomHttpInterceptor } from './services/http-interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom([
      HttpClientModule,
      StoreRouterConnectingModule.
      forRoot(),
      StoreModule.forRoot({router: routerReducer}),
      EffectsModule.forRoot([ApplicationEffects]),
      StoreModule.forFeature(applicationFeatureKey, applicationReducer),
      StoreDevtoolsModule.instrument({
        maxAge:50,
        logOnly: false,
        autoPause: true,
        features: {
          pause: false,
          lock: true,
          persist: true,
        },
      }),
    ]),
    {
      provide: HTTP_INTERCEPTORS , useClass: CustomHttpInterceptor ,multi:true
    }

  ],
}

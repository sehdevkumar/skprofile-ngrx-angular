import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideHttpClient } from '@angular/common/http'
import { StoreModule, provideStore } from '@ngrx/store'
import { applicationFeatureKey, applicationReducer } from './store/reducers'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreRouterConnectingModule, provideRouterStore, routerReducer } from '@ngrx/router-store'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom([
      StoreRouterConnectingModule.forRoot(),
      StoreModule.forRoot({router: routerReducer}),
      StoreModule.forFeature(applicationFeatureKey, applicationReducer),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: false,
        autoPause: true,
        features: {
          pause: false,
          lock: true,
          persist: true,
        },
      }),
    ]),
  ],
}

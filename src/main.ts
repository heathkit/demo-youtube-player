import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/**
 * The "main" for the Angular 2 app. This tells Angular to start doing stuff,
 * i.e. bootstrap the app.
 */
platformBrowserDynamic().bootstrapModule(AppModule);

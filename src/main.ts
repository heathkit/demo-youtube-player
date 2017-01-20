import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/**
 * The "main" for the Angular 2 app. This tells Angular to start doing stuff,
 * i.e. bootstrap the app.
 */
// TODO(M1): Bootstrap the AppModule by uncommenting the line below.
platformBrowserDynamic().bootstrapModule(AppModule);

// TODO(M1): Delete the line below after doing the above.
//document.body.innerHTML += '<center>Let\'s get ready to rumble!</center>';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { YoutubeAppComponent } from './app.component';
import { SearchModule } from '../search/search.module';
import { AppRoutesModule } from '../routes.module';
import { StuffComponent } from './stuff/stuff.component';

@NgModule({
  declarations: [  StuffComponent],  // TODO(M1): Add the root component here.
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    // SearchModule  // TODO(M1): Uncomment to import the search module here.
    // TODO(M11): Import the routes module.
  ],
  bootstrap: [  ],  // TODO(M1): Add the root component here.
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { YoutubeAppComponent } from './app.component';
import { SearchModule } from '../search/search.module';
import { AppRoutesModule } from '../routes.module';

@NgModule({
  declarations: [YoutubeAppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    SearchModule
    // TODO(M11): Import the routes module.
  ],
  bootstrap: [ AppModule ],
})
export class AppModule {}

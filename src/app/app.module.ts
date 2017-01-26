import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { YoutubeAppComponent } from './app.component';
import { SearchModule } from '../search/search.module';
import { UploadVideosComponent } from '../upload/upload-videos.component';
import { SearchVideosComponent } from '../search/search-videos.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: SearchVideosComponent},
  { path: 'search', redirectTo: '/'},  // redirect to / from /search.
  { path: 'upload', component: UploadVideosComponent}
];

@NgModule({
  declarations: [YoutubeAppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    SearchModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [YoutubeAppComponent],
})
export class AppModule {}

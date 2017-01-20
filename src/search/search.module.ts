import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AnalyticsTrackerService } from '../services/analytics-tracker.service';
import { YoutubeService } from '../services/youtube.service';
import { ToggleModule } from '../toggle/toggle.module';
import { UploadModule } from '../upload/upload.module';
import { UploadVideosComponent } from '../upload/upload-videos.component';

import { AnalyticsMonitorDirective } from './analytics-monitor.directive';
import { FuzzyTimePipe } from './fuzzy-time.pipe';
import { SearchResultCardComponent } from './search-result-card.component';
import { SearchVideosComponent } from './search-videos.component';
import { ThumbsComponent } from './thumbs.component';
import { VideoAnnotationComponent } from './video-annotation.component';

@NgModule({
  declarations: [
    // TODO(M4): Declare the search result card component.
    // TODO(M5): Declare the thumbs component.
    // TODO(M7): Declare the fuzzy time pipe.
    // TODO(M9): Declare the video annotation component.
    // TODO(M10): Delcare the analytics monitor directive.
    SearchVideosComponent,
  ],
  providers: [
    AnalyticsTrackerService,
    YoutubeService
  ],
  imports: [
    // TODO(M8): Import the toggle module.
    UploadModule,
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [ SearchVideosComponent ]
})
export class SearchModule {}

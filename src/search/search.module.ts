import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
    SearchResultCardComponent,
    ThumbsComponent,
    FuzzyTimePipe,
    VideoAnnotationComponent,
    AnalyticsMonitorDirective,
    SearchVideosComponent,
  ],
  providers: [
    AnalyticsTrackerService,
    YoutubeService
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ToggleModule,
    UploadModule,
  ],
  exports: [ SearchVideosComponent ]
})
export class SearchModule {}

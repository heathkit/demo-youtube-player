import { Component } from '@angular/core';

import { AnalyticsTrackerService } from '../services/analytics-tracker.service';

/**
 * Root component for the entire Angular 2 YouTube app.
 */
@Component({
  selector: 'demo-youtube-player',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  viewProviders: [ AnalyticsTrackerService ]
})
export class YoutubeAppComponent {}

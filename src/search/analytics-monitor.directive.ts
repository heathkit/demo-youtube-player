import { Directive, Input, OnChanges, SimpleChange } from '@angular/core';

import { AnalyticsTrackerService } from '../services/analytics-tracker.service';

@Directive({selector: 'demo-analytics-monitor'})
export class AnalyticsMonitorDirective {

  // TODO(M10): @Input videoId and likeCount.

  constructor(private tracker: AnalyticsTrackerService) {}

  // TODO(M10): Implement the OnChanges lifecyle hook.
}

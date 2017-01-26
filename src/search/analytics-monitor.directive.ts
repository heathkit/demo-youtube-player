import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

import { AnalyticsTrackerService } from '../services/analytics-tracker.service';

@Directive({selector: 'demo-analytics-monitor'})
export class AnalyticsMonitorDirective implements OnChanges {
  @Input() videoId: string;
  @Input() likeCount: number;

  constructor(private tracker: AnalyticsTrackerService) {}

  /**
   * Lifecycle event called after a change when all of the bound properties
   * have been updated.
   * @param changes Map of the changes.
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.tracker.track(this.videoId, this.likeCount);
  }
}

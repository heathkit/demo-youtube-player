import { Injectable } from '@angular/core';

/**
 * Service to display analytics in the browser console.
 */
@Injectable()
export class AnalyticsTrackerService {
  track(videoId: string, likeCount: number) {
    console.log(`Like count ${likeCount} for video ${videoId}`);
  }
}
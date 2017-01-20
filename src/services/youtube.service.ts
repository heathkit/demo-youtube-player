import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Video } from '../video';

/**
 * Service for fetching search results from the YouTube API. For the purposes
 * of this example, this will always return the same static data from
 * search-results.json.
 */
@Injectable()
export class YoutubeService {
  
  /** The "API" resource URL. */
  videosUrl = 'services/search-results.json';
  
  constructor(private http: Http) {}
  
  /**
   * Get the list of videos from our "API".
   * @returns A promise that resolve to a list of Videos.
   */
  getVideos(): Promise<Video[]> {
    return this.http.get(this.videosUrl)
                    .toPromise()
                    .then(response => JSON.parse(response._body) as Video[]);
  }
  
}
import { Component, QueryList, ViewChildren } from '@angular/core';

import { YoutubeService } from '../services/youtube.service';

import { CardPlayEvent, SearchResultCardComponent, SearchResultState } from './search-result-card.component';

import { Video } from '../video';

const FAKE_RESULTS = [
  { description: '6 cat dances you need to watch today' },
  { description: 'You won\'t believe what this dog can do!' },
  { description: 'How hedgehogs are plotting against humanity' }
];

/**
 * Component for performing video search and displaying results.
 */
@Component({
  selector: 'demo-search-videos',
  templateUrl: 'search-videos.component.html',
})
export class SearchVideosComponent {
  /* Container to hold the list of video results. */
  videoList: any[];

  /* The user's search term. Initialized to "cats". */
  searchTerm: string = 'cats';

  /* A query list containing all result cards. */
  @ViewChildren(SearchResultCardComponent) cards: QueryList<SearchResultCardComponent>;

  constructor(private ytService: YoutubeService) {}

  /**
   * Enforce that only one video is playing at a time.
   * @param event The event that indicates if a user wants to play a video.
   */
  playOneCard(event: CardPlayEvent): void {
    for (const card of this.cards.toArray()) {
      card.state = event.target === card ? SearchResultState.PLAYER :
                                           SearchResultState.THUMBNAIL;
    }
  }

  fetch() {
    this.ytService.getVideos().then((videos) => {
      this.videoList = videos;
    });
  }
}

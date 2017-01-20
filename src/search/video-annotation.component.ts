import { Component } from '@angular/core';

import { SearchResultCardComponent } from './search-result-card.component';

export enum SearchResultState {
  THUMBNAIL,
  PLAYER
}

/**
 * Component to display a video annotation on our search result. The intent is
 * to understand coupling components (cross-component injection).
 */
@Component({
  selector: 'demo-video-annotation',
  templateUrl: 'search/video-annotation.component.html',
  styleUrls: ['search/video-annotation.component.css']
})
export class VideoAnnotationComponent {

  // TODO(M9): Use parent injection to get ahold of the video.

  /**
   * Getter to retrive the video annotation we want to display using very simple
   * logic.
   */
  get excitingAnnotation() {
    // TODO(M9): Add an appropriate annotation based on the video description.
    return '';
  }

}

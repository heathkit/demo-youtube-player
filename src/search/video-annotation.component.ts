import { Component } from '@angular/core';

import { SearchResultCardComponent } from './search-result-card.component';
import {SearchVideosComponent} from './search-videos.component';

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
  template: '<div class="annotation">{{excitingAnnotation}}</div>',
  styles: [`
    .annotation {
      margin: 18px 0 0 0;
      padding: 8px;
      background: #151515;
      background: rgba(0,0,0,0.3);
    }`]
})
export class VideoAnnotationComponent {
  constructor(private card: SearchResultCardComponent) { }

  /**
   * Getter to retrieve the video annotation we want to display using very simple
   * logic.
   */
  get excitingAnnotation() {
    if (this.card.video.description!.match(/music/)) {
      return 'Turn up your speakers!';
    } else {
      return 'Learn more about cats on our channel!'
    }
  }

}

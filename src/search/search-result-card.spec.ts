import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '@angular2-material/card/card';

import { AnalyticsTrackerService } from '../services/analytics-tracker.service';
import { TogglePanelComponent } from '../toggle/toggle-panel.component';
import { AnalyticsMonitorDirective } from './analytics-monitor.directive';
import { FuzzyTimePipe } from './fuzzy-time.pipe';
import { SearchResultCardComponent } from './search-result-card.component';
import { VideoAnnontationComponent } from './video_annotation.component';
import { ThumbChangeEvent, ThumbsComponent, ThumbState } from './thumbs.component';
import { Video } from '../video';

describe('search result component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        // TODO(M6): Delcare all components used in the test.
      ],
      providers: [ AnalyticsTrackerService ],
      imports: [ MaterialModule ],
    });
    TestBed.compileComponents();
  }));

  it('should display', () => {
    // TODO(M6): Create a TestSearchResultCardComponent using TestBed.
    // TODO(M6): Detect changes in the fixture.
    // TODO(M6): Add expectations on the texxt in fixture.nativeElement.textContent;
  });
});


@Component({
  selector: 'test-search-result-card',
  // TODO(M6): Create a template on the line below that tests the
  //           SearchResultCardComponent.
  template: '',
})
class TestSearchResultCardComponent {
  video: Video;
  constructor() {
    this.video = {
      'thumbnailUrl': 'http://path/to.thumbnail',
      'description': 'some description',
      'viewCount': 321,
      'likeCount': 300,
      'dislikeCount': 0
    };
  }
}

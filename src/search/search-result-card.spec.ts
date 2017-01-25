import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AnalyticsTrackerService } from '../services/analytics-tracker.service';
import { TogglePanelComponent } from '../toggle/toggle-panel.component';
import { AnalyticsMonitorDirective } from './analytics-monitor.directive';
import { FuzzyTimePipe } from './fuzzy-time.pipe';
import { SearchResultCardComponent } from './search-result-card.component';
import { ThumbChangeEvent, ThumbsComponent, ThumbState } from './thumbs.component';
import { Video } from '../video';

describe('search result component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestSearchResultCardComponent, SearchResultCardComponent, ThumbsComponent
      ],
      providers: [ AnalyticsTrackerService ],
      imports: [ MaterialModule ],
    });
    TestBed.compileComponents();
  }));

  it('should display', () => {
    let fixture = TestBed.createComponent(TestSearchResultCardComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('some description');
  });
});


@Component({
  selector: 'test-search-result-card',
  template: '<demo-search-result-card [video]="video"></demo-search-result-card>',
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

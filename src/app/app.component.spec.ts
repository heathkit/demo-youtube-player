/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { YoutubeAppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import {Component} from "@angular/core";


// Uncomment this if you want to fix up the declarations and
// imports.
describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        YoutubeAppComponent,
        DemoSearchVideosTestComponent
      ],
      imports: [MaterialModule],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(YoutubeAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a div tag', async(() => {
    const fixture = TestBed.createComponent(YoutubeAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.app-content').textContent)
      .toContain('Hello, YouTube!!!');
  }));

  it('should render a demo-search-videos component', async(() => {
    const fixture = TestBed.createComponent(YoutubeAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.search-videos').textContent)
      .toContain('Search for Videos');
  }));
});


@Component({
  selector: 'demo-search-videos',
  template: '<div class="search-videos">Search for Videos</div>'
})
class DemoSearchVideosTestComponent {
  constructor() {

  }
}

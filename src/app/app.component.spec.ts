/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { YoutubeAppComponent } from './app.component';
import { MaterialModule } from '@angular/material';


// Uncomment this if you want to fix up the declarations and
// imports.
xdescribe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        YoutubeAppComponent
      ],
      imports: [MaterialModule]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(YoutubeAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(YoutubeAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(YoutubeAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});

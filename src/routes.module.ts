import { RouterModule, Routes } from '@angular/router';

import { SearchVideosComponent } from './search/search-videos.component';
import { UploadVideosComponent } from './upload/upload-videos.component';

class FakeComponent {} // TODO(M11): Remove this fake component.

const routes: Routes = [ 
  { path: '', component: FakeComponent },  // TODO(M11): Replace with real component.
  { path: 'search', redirectTo: '/'},  // redirect to / from /search.
  { path: 'upload', component: FakeComponent }  // TODO(M11): Replace with real component.
];

export const AppRoutesModule = RouterModule.forRoot(routes);
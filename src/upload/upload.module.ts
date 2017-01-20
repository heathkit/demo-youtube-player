import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

// TODO(M12): Import all validator directives here.
import { UploadVideosComponent } from './upload-videos.component';

@NgModule({
  declarations: [
    UploadVideosComponent,
    // TODO(M12): Add all validator directives here.
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [ UploadVideosComponent ],
})
export class UploadModule {}

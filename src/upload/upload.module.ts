import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CatNameValidatorDirective } from './cat-name-validator.directive';
import { UploadVideosComponent } from './upload-videos.component';

@NgModule({
  declarations: [
    UploadVideosComponent,
    CatNameValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [ UploadVideosComponent ],
})
export class UploadModule {}

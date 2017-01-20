import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { TogglePanelComponent } from './toggle-panel.component';

@NgModule({
  declarations: [  ],  // TODO(M8): Declare the toggle panel component.
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [  ],  // TODO(M8): Export the toggle panel component.
})
export class ToggleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { TogglePanelComponent } from './toggle-panel.component';

@NgModule({
  declarations: [
    TogglePanelComponent
  ],
  imports: [
    CommonModule,
    // Need .forRoot when using material in a submodule.
    MaterialModule.forRoot()
  ],
  exports: [
    TogglePanelComponent
  ],
})
export class ToggleModule {}

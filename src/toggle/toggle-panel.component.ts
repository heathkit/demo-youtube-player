import { Component } from '@angular/core';

/**
 * Component for toggling between two different views (e.g., "right" / "left").
 */
@Component({
  selector: 'demo-toggle-panel',
  templateUrl: './toggle-panel.component.html'
})
export class TogglePanelComponent {
  // Here's an example of using string-literal type unions in TS, to
  // have type-safe string constants.
  displayed: 'left' | 'right' = 'left';

  toggle() {
    if (this.displayed === 'left') {
      this.displayed = 'right';
    } else {
      this.displayed = 'left';
    }
  }
}

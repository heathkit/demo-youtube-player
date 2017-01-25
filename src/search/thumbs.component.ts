import { Component, EventEmitter, Output } from '@angular/core';

export enum ThumbState {
  UP,
  DOWN,
  NONE
}

/**
 * Component for displaying "thumbs up" / "thumbs down" buttons for a video
 * (search result).
 */
@Component({
  selector: 'demo-vote-thumbs',
  templateUrl: './thumbs.component.html',
  styleUrls: ['./thumbs.component.css']
})
export class ThumbsComponent {

  state: ThumbState = ThumbState.NONE;

  @Output() change = new EventEmitter<ThumbChangeEvent>();

  // Templates can't access static value, so we redirect as follows.
  get UP_T() { return ThumbState.UP; }
  get DOWN_T() { return ThumbState.DOWN; }
  get NONE_T() { return ThumbState.NONE; }

  onClick(stateClicked: ThumbState) {
    let oldState = this.state;
    if (oldState == stateClicked) {
      this.state = ThumbState.NONE;
    } else {
      this.state = stateClicked;
    }
    this.change.emit(new ThumbChangeEvent(oldState, this.state));
  }

  // TODO(M5): Add an onClick() handler for the thumbs up / down buttons.

  reset() { this.state = ThumbState.NONE; }
}

export class ThumbChangeEvent {

  upDiff: number;
  downDiff: number;

  constructor(oldState: ThumbState, newState: ThumbState) {
    this.upDiff = ThumbChangeEvent.computeUpDiff(oldState, newState),
    this.downDiff = ThumbChangeEvent.computeDownDiff(oldState, newState);
  }

  static computeUpDiff(oldState: ThumbState, newState: ThumbState) {
    if (oldState == ThumbState.NONE && newState == ThumbState.UP) return 1;
    if (oldState == ThumbState.NONE && newState == ThumbState.DOWN) return 0;
    if (oldState == ThumbState.DOWN && newState == ThumbState.UP) return 1;
    if (oldState == ThumbState.UP && newState == ThumbState.DOWN) return -1;
    if (oldState == ThumbState.DOWN && newState == ThumbState.NONE) return 0;
    if (oldState == ThumbState.UP && newState == ThumbState.NONE) return -1;
    return 0;
  }

  static computeDownDiff(oldState: ThumbState, newState: ThumbState) {
    if (oldState == ThumbState.NONE && newState == ThumbState.UP) return 0;
    if (oldState == ThumbState.NONE && newState == ThumbState.DOWN) return 1;
    if (oldState == ThumbState.DOWN && newState == ThumbState.UP) return -1;
    if (oldState == ThumbState.UP && newState == ThumbState.DOWN) return 1;
    if (oldState == ThumbState.DOWN && newState == ThumbState.NONE) return -1;
    if (oldState == ThumbState.UP && newState == ThumbState.NONE) return 0;
    return 0;
  }

}

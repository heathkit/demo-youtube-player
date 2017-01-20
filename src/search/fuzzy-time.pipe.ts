import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to get a fuzzy value for how long ago a date occured, e.g., "7 days ago"
 * or "3 years ago".
 */
// TODO(M7): Turn this class into an Angular pipe using @Pipe and implementing
//           the PipeTransform interface.
export class FuzzyTimePipe {

  /**
   * Transform an input ISO 8601 date into a fuzzy value. This is a very naive
   * implementation as we are just demonstrating the pipe with a simple example.
   * @param {value} The ISO 8601 date value.
   * @param {args} TypeScript rest parameters (ignored).
   * @return The fuzzy time representation of the date.
   */
  transform() {  // TODO(M7): Implement correctly.
    // TODO(M7): Write the logic for the fuzzy time pipe. Don't worry about
    //           having "perfect" logic.
  }
}

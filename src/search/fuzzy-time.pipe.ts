import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to get a fuzzy value for how long ago a date occured, e.g., "7 days ago"
 * or "3 years ago".
 */
@Pipe({name: 'fuzzyTime'})
export class FuzzyTimePipe implements PipeTransform {

  /**
   * Transform an input ISO 8601 date into a fuzzy value. This is a very naive
   * implementation as we are just demonstrating the pipe with a simple example.
   * @param {value} The ISO 8601 date value.
   * @param {args} TypeScript rest parameters (ignored).
   * @return The fuzzy time representation of the date.
   */
  transform(value: string) {
    const uploaded: Date = new Date(value);
    const today: Date = new Date();

    if (uploaded.getFullYear() < today.getFullYear()) {
      const diff = today.getFullYear() - uploaded.getFullYear();
      return `${diff} years ago`;
    } else if (uploaded.getMonth() < today.getMonth()) {
      const diff = today.getMonth() - uploaded.getMonth();
      return `${diff} months ago`;
    } else if (uploaded.getDate() < today.getDate()) {
      const diff = today.getDate() - uploaded.getDate();
      return `${diff} days ago`;
    } else if (uploaded.getHours() < today.getHours()) {
      const diff = today.getHours() - uploaded.getHours();
      return `${diff} hours ago`;
    } else if (uploaded.getMinutes() < today.getMinutes()) {
      const diff = today.getMinutes() - uploaded.getMinutes();
      return `${diff} minutes ago`;
    }

    return value;
  }
}

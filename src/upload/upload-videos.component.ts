import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


/**
 * Component for a form to upload a video.
 */
@Component({
  selector: 'demo-upload-videos',
  templateUrl: 'upload/upload-videos.component.html',
  styleUrls: ['upload/upload-videos.component.css'],
})
export class UploadVideosComponent {

  /** The upload form from the template. */
  // TODO(M12): Acess the upload form.
  uploadForm = { 'value': { 'title': 'FAKE', 'description': 'REPLACE ME!!' } };

  /**
   * Method to create a string representation of the upload form object.
   * @returns String representation of the form object.
   */
  toString() {
    const value = this.uploadForm.value;
    return `Video title: ${value.title}, Video description: ${value.description}`;
  }

  /**
   * Handler for submitting the form. Note: this does not actually upload the
   * video to Youtube.
   */
  submit() {
    console.log(
        `You submitted '${this.toString()}', but our backend can't handle the form submission.`);
  }
}

import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, NgForm } from '@angular/forms';

/**
 * Directive to provide the cat name validator to templates.
 */
@Directive({
  selector: '',  // TODO(M12): Specify the selector for the validator.
  providers: [{
    provide: NG_VALIDATORS,
    useValue: CatNameValidatorDirective.hasCatName,
    multi: true
  }]
})
export class CatNameValidatorDirective {
  
  /**
   * Ensure that a FormControl has the word cats in it.
   * @param control The FormControl to check.
   * @returns A map with the list of validation errors, if any.
   */
  static hasCatName(control: FormControl) : {[errorKey: string] : any} {
    // TODO(M12): Implement the validator function.
    return {};
  }
  
}
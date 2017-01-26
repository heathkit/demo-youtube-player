import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

/**
 * Directive to provide the cat name validator to templates.
 */
@Directive({
  selector: '[hasCatsRequired][ngModel]',
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
    const hasCats: RegExp = new RegExp('(^|[^\w])[cC]ats?([^\w]|\$)');
    if (control.value && hasCats.test(control.value)) {
      return {};
    } else {
      return {'Error, the search did not include cats': true};
    }
  }

}

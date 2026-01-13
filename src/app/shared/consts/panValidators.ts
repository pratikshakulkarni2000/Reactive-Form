import { AbstractControl, ValidationErrors } from "@angular/forms";


export class PanValidators {
    static isPanValid (control : AbstractControl) : ValidationErrors | null {
        let val : string = control.value

        if(!val){
            return null
        }

        let regExp = /^[A-Z]{5}[0-9]{4}[A-Z]$/

        let isValid = regExp.test(val)

        if(isValid){
            return null
        }else{
            return {
                inValidPan : `Invalid Pan No !!!`
            }
        }

    }
}
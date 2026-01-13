import { AbstractControl, ValidationErrors } from "@angular/forms";


export class AadharValidator {
    static isAadharValid (control : AbstractControl) :ValidationErrors | null {
        let val : string = control.value

        if(!val){
            return null
        }

        let regExp = /^\d{12}$/

        let isValid = regExp.test(val)

        if(isValid){
            return null
        }else{
            return {
                   invalidAadhar  : `Invalid Aadhar No (1234 5678 1234)`
            }
        }

    }
}
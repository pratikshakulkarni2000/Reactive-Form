import { AbstractControl, ValidationErrors } from "@angular/forms";


export class EmpIdVAlidator {
    static isEmpIdValid (control : AbstractControl) : ValidationErrors | null {
        let val : string = control.value

        if(!val){
            return null
        }

        let regExp = /^[A-Z]\d{3}$/

        let isValid = regExp.test(val)   //test() returns boolean

        if(isValid){
            return null
        }else{
            return{
                inValidEmpId : `Invalid EmpId (E123)`
            }
        }
    }
}
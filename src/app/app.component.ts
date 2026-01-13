import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './shared/consts/validatorsPattern';
import { NoSpaceBarValidators } from './shared/consts/noSpaceValidators';
import { EmpIdVAlidator } from './shared/consts/empIdValidators';
import { AadharValidator } from './shared/consts/aadharValidators';
import { PanValidators } from './shared/consts/panValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Reactive-Form';
  gendersArr : Array<string> = ["Female", "Male", "Others"]
  signUpForm !: FormGroup

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userName : new FormControl(
        null,
        [Validators.required,
        Validators.minLength(7),
        Validators.maxLength(12), 
        Validators.pattern(CustomRegex.onlyText),
        NoSpaceBarValidators.noSpace
        ],[]),
      email : new FormControl(null,
        [Validators.required,
          Validators.pattern(CustomRegex.email)
        ],
        []),
      empId : new FormControl(null,
        [Validators.required,
          EmpIdVAlidator.isEmpIdValid],
        []
      ),
      aadharNo : new FormControl(null,
        [Validators.required,
          AadharValidator.isAadharValid,
          Validators.maxLength(12)
        ],
        []
      ),
      panNo : new FormControl(null,
        [Validators.required,
          PanValidators.isPanValid,
          Validators.maxLength(10)
        ],
        []
      ),
      gender : new FormControl(null,
        [Validators.required],
        []
      ),
      skills : new FormArray([new FormControl(null,Validators.required)])
    })

    console.log(this.signUpForm);
  }

  onSignUp(){
    console.log(this.signUpForm);
  }

  get formControls(){
    return this.signUpForm.controls
  }

  get userName () {
    return this.signUpForm.get('userName') as FormControl
  }

  get skillsArr(){
    return this.signUpForm.get('skills') as FormArray
  }

  onSkillAdd(){
    let control = new FormControl(null,Validators.required)
    this.skillsArr.push(control)
  }

  onSkillRemove(i : number){
    console.log(i)
    this.skillsArr.removeAt(i)
  }

}

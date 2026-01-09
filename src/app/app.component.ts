import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Reactive-Form';

  signUpForm !: FormGroup

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userName : new FormControl(null,[Validators.required,Validators.minLength(8)],[]),
      email : new FormControl(null)

    })

    console.log(this.signUpForm);
  }

  onSignUp(){
    console.log(this.signUpForm.value);
  }
}

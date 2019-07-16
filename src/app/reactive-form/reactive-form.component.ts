import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  formFeilds: string[];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
    
    this.formFeilds = ['name', 'lastname', 'age', 'country','email', 'message' ];

  }

  onSubmit(form: FormGroup) {
    console.log('form', form);

    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }

  setErrorForFeild(value) {
    if(this.myForm.controls[value].status == "INVALID"){
      this.myForm.controls[value].setErrors({'setInvalid': true});
    }

    console.log('form fielld', this.myForm);
    
  }

  onFocus = (value) => {
    console.log('value', value);
    
    const length = this.formFeilds.indexOf(value);
    // const length = this.formFeilds.findIndex(item => item === value);
    const subArray = this.formFeilds.slice(0, length)
    
    subArray.forEach(element => {
      this.setErrorForFeild(element);
    });
  }

  // onFocusAge = () => {
  //   this.setErrorForFeild('name');
  // }





  setError(value){

    console.log('value', value);
    if(this.myForm.controls.name.status == "INVALID"){
      this.myForm.controls['name'].setErrors({'setInvalid': true});
    }
    if(value == 'age'){
    if(this.myForm.controls['lastname'].status == "INVALID"){
      this.myForm.controls['lastname'].setErrors({'setInvalid': true});

    }

    }
    console.log('this.myForm', this.myForm);
    
  }
}

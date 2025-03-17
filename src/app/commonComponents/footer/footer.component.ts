import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  form: FormGroup;
  showErrorMessage:boolean=false;


 constructor(private fb: FormBuilder) {
    // Initialize the form with validation rules
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  hideErrorMessage(){

    console.log("hideErrorMessage() called");
    
    this.showErrorMessage=false;

  }

  // Submit handler
  onSubmit() {

    console.log(this.form);
    
    if (this.form?.valid) {

      alert("form is successfully submitted")
      console.log('Form Submitted!', this.form?.value);
    } else {

      this.showErrorMessage=true;



      console.log('Form not valid');
    }
  }
}

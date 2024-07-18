import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from 'src/app/form-data.service';

@Component({
  selector: 'app-employer-form',
  templateUrl: './employer-form.component.html',
  styleUrls: ['./employer-form.component.css']
})
export class EmployerFormComponent implements OnInit {

  Form !: any;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  contactRegex: string = "[789][0-9]{9}";
  nameRegex : string = "[A-Za-z ]+"

  submittedForm !: any;

  constructor(fb : FormBuilder, private router : Router, private formDataService : FormDataService) { 

    this.Form = fb.group({
      name : ['', [Validators.required, Validators.pattern(this.nameRegex)]],
      email : ['', [Validators.required,Validators.pattern(this.emailRegex)]],
      phone : ['', [Validators.required,Validators.pattern(this.contactRegex)]],
      status : ['', Validators.required]
    })

  }

  get name (){
    return this.Form.get('name');
  }
  
  get email (){
    return this.Form.get('email');
  }

  get phone (){
    return this.Form.get('phone');
  }

  get status (){
    return this.Form.get('status');
  }



  ngOnInit(): void {
  }

  onSubmit(){
    
   if (this.Form.valid){
    this.formDataService.setFormData(this.Form.value);
    this.router.navigate(['/detail']);
   }
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormDataService } from 'src/app/form-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  formData !: any

  constructor(private route : ActivatedRoute, private formDataService : FormDataService){}

  ngOnInit(): void {

    this.formData = this.formDataService.getFormData()
;
  }

}

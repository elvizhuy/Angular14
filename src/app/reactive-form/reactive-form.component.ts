import { CommonService } from './../Services/common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  public formDataOld: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    age: new FormControl(''),
  });

  public formData = this.fb.group({
    firstname: ['',Validators.required],
    lastname: ['',Validators.required],
    age:[''],
    address: ['',Validators.minLength(6)],
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
  });
  constructor(private common: CommonService, private fb: FormBuilder) {}

  ngOnInit(): void {}
  public submitReactForm() {
    this.common.submitData(this.formData.value);
  }
}

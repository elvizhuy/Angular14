import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  public name = '';
  constructor() {}

  ngOnInit(): void {}
  public submitForm(): void {
    console.log(this.name);
  }
}

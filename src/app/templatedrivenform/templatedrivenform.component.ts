import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.scss']
})
export class TemplatedrivenformComponent implements OnInit {
  public name = '';
  constructor() { }

  ngOnInit(): void {
  }
  public submitForm(): void {
    console.log(this.name);
  }
}

import { CommonService } from './../Services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.scss'],
})
export class TemplatedrivenformComponent implements OnInit {
  public name = '';
  constructor(private common: CommonService) {}

  ngOnInit(): void {}
  public submitForm(): void {
    this.common.submitData({name:this.name,age:30});
  }
}

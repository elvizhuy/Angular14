import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public LoginName = 'user';
  public myColor = 'violet';
  public counter = 0;
  public counterBinhPhuong = 0;
  constructor(private coMMon: CommonService) {}

  ngOnInit(): void {
    this.counter = this.coMMon.getCounter();
    this.counterBinhPhuong = this.coMMon.binhphuong(this.counter);
    this.counter++;
  }
}

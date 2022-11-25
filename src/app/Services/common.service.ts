import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// dùng để tạo các phương thức dùng chung cho các component khác
export class CommonService {
  private counter = 50;
  constructor() {}
  public binhphuong(n: number): number {
    return n * n;
  }
  public getCounter(): number {
    return this.counter;
  }
  public setCounter(n: number): void {
    this.counter = n;
  }
  public submitData(data: any):void {
    console.log('Send data to serve: ', data);
  }
}

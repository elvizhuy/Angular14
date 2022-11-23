import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'My name is Huy';
  public subName = 'My name is Daniel'
  public titleName = 'Elviz'
  public CountryData = [
    {
      city: '-- Cities --',
      district: ['-- Districts --'],
    },
    {
      city: 'Hà Nội',
      district: [
        'Quận Ba Đình',
        'Quận Long Biên',
        'Quận Hoàn Kiếm',
        'Quận Đống Đa',
        'Quận Hoàng Mai',
        'Quận Nam Từ Liêm',
        'Quận Bắc Từ Liêm',
        'Quận Hà Đông',
        'Quận Hai Bà Trưng',
        'Quận Cầu Giấy',
      ],
    },
    {
      city: 'Đà Nẵng',
      district: [''],
    },
    {
      city: 'TP Hồ Chí Minh',
      district: [
        'Quận 1',
        'Quận 2',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Quận 6',
        'Quận 7',
        'Quận 8',
        'Quận 9',
        'Quận 10',
        'Quận 11',
        'Quận 12',
        'Quận Thủ Đức',
        'Quận Bình Tân',
        'Quận Bình Thạnh',
        'Quận Gò Vấp',
        'Quận Tân Phú',
        'Quận Tần Bình',
        'Quận Phú Nhuận',
      ],
    },
  ];

  public districts: string[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log('VietnamCities = ', this.CountryData);
  }
  public changeCity(event: any) {
    // CÁCH 1
    const city = event.target.value;
    // if(!city){
    //   return
    // }
    // console.log('event', city);
    // const search = this.CountryData.filter(data => data.city === city);
    // console.log(search)
    // if(search && search.length > 0){
    //   this.districts = search[0].district
    // }
    // CÁCH 2
    this.districts =
      this.CountryData.find((data) => data.city === city)?.district || [];
  }
}
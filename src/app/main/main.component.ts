import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  arrOfPicture: string[] = [
    '../../assets/imgs/products/photo_1_2023-06-20_13-59-03.jpg',
    '../../assets/imgs/products/photo_2_2023-06-20_13-59-03.jpg',
    '../../assets/imgs/products/photo_3_2023-06-20_13-59-03.jpg',
    '../../assets/imgs/products/photo_4_2023-06-20_13-59-03.jpg',
    '../../assets/imgs/products/photo_5_2023-06-20_13-59-03.jpg',
    '../../assets/imgs/products/photo_6_2023-06-20_13-59-03.jpg',
    '../../assets/imgs/products/photo_7_2023-06-20_13-59-03.jpg',
    '../../assets/imgs/products/photo_8_2023-06-20_13-59-03.jpg',
    '../../assets/imgs/products/photo_9_2023-06-20_13-59-03.jpg'
  ]

  ngOnInit(): void {

  }

}

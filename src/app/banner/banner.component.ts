import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  bannerNumber: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onNextBanner(direction: number) {
    this.bannerNumber += direction;
    if (this.bannerNumber <= 0) {
      this.bannerNumber = 3;
    }
    if (this.bannerNumber >= 4) {
      this.bannerNumber = 1;
    }
  }

}

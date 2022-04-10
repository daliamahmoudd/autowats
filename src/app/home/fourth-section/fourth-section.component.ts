import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-section',
  templateUrl: './fourth-section.component.html',
  styleUrls: ['./fourth-section.component.scss'],
})
export class FourthSectionComponent implements OnInit {
  imgSrc!: string;
  randomLeft: any = [];
  randomTop!: number;

  img = [
    { imgSrc: '../../../assets/unsplash_ILip77SbmOE.svg', flag: false },
    { imgSrc: '../../../assets/unsplash_ILip77SbmOE.svg', flag: false },
    { imgSrc: '../../../assets/unsplash_ILip77SbmOE.svg', flag: false },
  ];
  img2 = [
    { imgSrc: '../../../assets/unsplash_ILip77SbmOE.svg', flag: false },
    { imgSrc: '../../../assets/unsplash_ILip77SbmOE.svg', flag: false },
    { imgSrc: '../../../assets/unsplash_ILip77SbmOE.svg', flag: false },
    { imgSrc: '../../../assets/unsplash_ILip77SbmOE.svg', flag: false },
  ];
  winWidth = 500;
  winHeight = 100;
  scrHeight: any;
  scrWidth: any;

  constructor() {
    this.getScreenSize();
    // console.log(this.img[0].flag);
  }
  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    if (this.scrWidth < 425) {
      this.winHeight = 30;
      this.winWidth = 15;
    } else if (this.scrWidth > 425 && this.scrWidth < 768) {
      this.winWidth = 90;
      this.winHeight = 50;
    }
  }

  ngOnInit(): void {}
  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  ngAfterContentInit() {
    for (var i = 0; i < this.img.length; i++) {
      this.randomLeft[i] = this.getRandomNumber(0, this.winWidth);
    }
    return this.randomLeft[i];
  }

  getLeftposition() {}
}

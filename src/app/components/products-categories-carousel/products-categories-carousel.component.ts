import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-categories-carousel',
  templateUrl: './products-categories-carousel.component.html',
  styleUrls: ['./products-categories-carousel.component.scss']
})
export class ProductsCategoriesCarouselComponent implements OnInit {
  divFirst:boolean = true;
  divLast:boolean = false;

  nextDivFunction(){
    this.divFirst = false;
    this.divLast = true;
  }

  previousDivFunction(){
    this.divFirst = true;;
    this.divLast = false;
  }

  ngOnInit() {
    if (window.screen.width < 1200) { 
      this.divFirst = true;
      this.divLast = true;
    }
  }

}

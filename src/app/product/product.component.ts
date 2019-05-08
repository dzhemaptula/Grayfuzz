import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name: string;
  specifications: string[];
  dateAdded: Date;

  constructor() { 
    this.name="iphone 6s"
    this.specifications = ['6 inch retina display', '64gb', 'As good as new'];
    this.dateAdded = new Date();
  }

  ngOnInit() {
  }

}

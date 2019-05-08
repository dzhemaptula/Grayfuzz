import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  @Input() name: string;
  //test
  constructor() { }

  ngOnInit() {
  }

}

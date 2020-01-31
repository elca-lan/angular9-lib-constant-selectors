import { Component, OnInit } from '@angular/core';
import { Constants } from './constants';

@Component({
  selector: Constants.SharedSelector,
  template: `
    <p>
      shared works!
    </p>
  `,
  styles: []
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Constants } from 'shared';

@Component({
  // This version here works!
  // selector: BusinessComponent.Selector,

  // This does not work for some reason :(
  selector: Constants.BusinessSelector,
  template: `
    <p>
      business works!
    </p>
  `,
  styles: []
})
export class BusinessComponent implements OnInit {
  public static readonly Selector = 'lib-business';

  constructor() { }

  ngOnInit(): void {
  }

}

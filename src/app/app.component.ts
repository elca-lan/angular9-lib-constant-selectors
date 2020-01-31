import { Component } from '@angular/core';
import { Constants } from 'shared';

@Component({
  selector: Constants.AppSelector,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'just-for-fun';
}

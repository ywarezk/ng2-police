import { Component, ChangeDetectionStrategy } from '@angular/core';
import {Map} from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';
  passToChild = Map({message: 'hello from parent'});

  public printCD() {
      console.log('CD AppComponent');
  }

  public changeDataToChild() {
    // this.passToChild = {message: 'this will cause CD'};
    // this.passToChild.message = 'this wont cause CD'; // this wont cause change detection
    // this.passToChild = {...this.passToChild, message: 'changing with spread operators'};
    // this.passToChild.set('message', 'changing from immutable') === this.passToChild; // false
    this.passToChild = this.passToChild.set('message', 'changing from immutable');
  }
}

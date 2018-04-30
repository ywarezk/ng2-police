import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myObj = {message: 'hello'};

  public ngOnInit() {
      setTimeout(() => {
        // this.myObj['message'] = 'hello2' // change detecityon wont work 
        // this.myObj = {message: 'hello2'}; 
      }, 1000);
  }
}

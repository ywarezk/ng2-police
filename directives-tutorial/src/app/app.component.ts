import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  classList = {active: true, stam: false};
  groceries = ['soya milk', 'tofu'];
  @ViewChild('appchild') private _childOrDirective: any

  ngOnInit() {
      setTimeout(() => {
          console.log('settimeout change');
          this.classList['active'] = false;
          this.classList['stam'] = true;
      }, 2000);

      setTimeout(() => {
        console.log('settimeout change');
    }, 1000);

  }

  ngAfterViewInit() {
      debugger;
  }

}

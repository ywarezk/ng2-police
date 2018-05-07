import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-grand-child2',
  templateUrl: './grand-child2.component.html',
  styleUrls: ['./grand-child2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChild2Component implements OnInit {

  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    //   fetch('https://nztodo.herokuapp.com/api/task/?format=json').then(() => {
    //       console.log('server returned results');
    //   });

    // Promise.resolve('hello world').then(() => {
    //     console.log('this will trigger cd');
    // });
  }

  public printCD() {
    console.log('CD GrandChild2');
}

    public stamFunction() {
        console.log('stamFunction');
    }

}


// setTimeout(() => {
//     console.log('will this trigger CD?');
// }, 2000);
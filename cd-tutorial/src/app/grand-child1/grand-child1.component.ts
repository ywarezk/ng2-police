import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-grand-child1',
  templateUrl: './grand-child1.component.html',
  styleUrls: ['./grand-child1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChild1Component implements OnInit {

  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit() {
      setTimeout(() => {
          console.log('timer in gran1');
        this._cd.markForCheck();
      }, 2000);
  }

  public printCD() {
    console.log('CD GrandChild1');
}

}

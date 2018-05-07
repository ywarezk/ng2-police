import { Component, OnInit, NgZone, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
    @Input() data: any

    public tasks$: Observable<any>;

  constructor(private _zone: NgZone, private _http: HttpClient, private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    // this._zone.runOutsideAngular(() => {
    //     setTimeout(() => {
    //         console.log('is timeout triggers CD?');
    //     }, 1000);
    // });

    // this._http
    //     .get('https://nztodo.herokuapp.com/api/task/?format=json')
    //     .subscribe(() => {
    //         console.log('server response: will this trigger CD?');
    //         this._cd.markForCheck();
    //         // this._cd.detectChanges();
    //     })
    

  }

  public printCD() {
    console.log('CD ChildComponent');
}

}

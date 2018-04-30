import { Component, AfterViewInit } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

    constructor(private _httpService: HttpClient) {}

    public ngAfterViewInit(): void {
        Observable
            .fromEvent(document.getElementById('youtube'), 'input')
            .map((event: Event) => (event.target as any).value)
            .do((searchString) => console.log(searchString))
            .debounceTime(1000)
            .distinctUntilChanged()
            // .mergeMap((searchString: string) => {
            //     return this._httpService.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchString}`);
            // })
            
            // .pluck('target', 'value')
            .subscribe((jsonArray : any[]) => {
                // console.log(jsonArray);
                this._httpService.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchString}`)
                    .subscribe(() => {

                    })
            })
    }

//   public search(event) {
//       const searchString: string = event.target.value;
//     // console.log(searchString);
//     //   Observable.of(searchString)
//     //     .subscribe((search: string) => {
//     //         console.log(search);
//     //     })
//   }
}

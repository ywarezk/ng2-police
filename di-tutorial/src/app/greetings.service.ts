import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class GreetingsService {
    public greetings$: BehaviorSubject<string[]> = new BehaviorSubject([])


  constructor() { }

}

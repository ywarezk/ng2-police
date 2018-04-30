import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
    public user: Subject<any> = new Subject();


  constructor() { }

}

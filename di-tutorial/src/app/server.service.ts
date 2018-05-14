import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {

  constructor(public url: string, private _http: HttpClient) { }

}

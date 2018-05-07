import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {appStoreReducers} from './reducers';

@NgModule({
    imports: [
        StoreModule.forRoot(appStoreReducers)
    ]
})
export class AppStoreModule {

}
/**
 * <div *appMyFor="let task of tasks">
 *  <span>
 * {{task}}
 *  </span>
 * </div>
 * 
 * <ng-template [appMyForOf]="tasks">
 *  <div>
 *      <span>
 *          {{task}} // {{$implicit}}
 *      </span>
 *  </div>
 * </ng-template>
 */


import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyFor]',
  exportAs: 'mySuperFor'
})
export class MyForDirective {
    @Input() set appMyForOf(value: any[]) {
        for (let item of value) {
            this._viewContainer.createEmbeddedView(this._templateRef, {
                $implicit: item
            });
        }     
    }

  constructor(private _templateRef: TemplateRef<any>, private _viewContainer: ViewContainerRef) { }

}

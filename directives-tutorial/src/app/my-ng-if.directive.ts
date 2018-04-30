/**
 * <div *appMyNgIf="booleanExpression" ></div>
 * 
 * <ng-template [appMyNgIf]="booleanExpression" >
 *  <div *appMyNgIf="booleanExpression" ></div>
 * </ng-template>
 */

import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective {
    @Input() set appMyNgIf(value) {
        if (value) {
            this._viewContainer.createEmbeddedView(this._templateRef);
        } else {
            this._viewContainer.clear();
        }
    }

  constructor(private _templateRef: TemplateRef<any>, private _viewContainer: ViewContainerRef) { }

}

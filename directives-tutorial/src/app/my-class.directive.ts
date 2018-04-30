import { Directive, Input, ElementRef, Renderer2, DoCheck, KeyValueDiffers, OnChanges, KeyValueDiffer, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyClass]',
  exportAs: 'myNgClass'
})
export class MyClassDirective implements DoCheck, OnChanges {
    @Input() appMyClass;
    private _classDiffer: KeyValueDiffer<string, boolean>;

    private _updateClasses(value) {
        console.log('updating the classes');
        for (const key of Object.keys(value)) {
            if (value[key]) {
                this._render.addClass(this._element.nativeElement, key);
                // this._element.nativeElement.classList.add(key); // we are not doing this again
            } else {
                this._render.removeClass(this._element.nativeElement, key);
                // this._element.nativeElement.classList.remove(key);
            }
        }
    }

    public ngOnChanges() {
        this._classDiffer = this._keyValueDiffers.find(this.appMyClass).create()
    }
    
  constructor(private _element: ElementRef, private _render: Renderer2, private _keyValueDiffers: KeyValueDiffers) { }

  public ngDoCheck() {
    // this._updateClasses(this.appMyClass);
    if (this._classDiffer.diff(this.appMyClass)) {
        this._updateClasses(this.appMyClass);
    }
  }

  @HostListener('mouseover')
  public onMouseOver() {
      console.log('my ng class mouse over');
  }

}

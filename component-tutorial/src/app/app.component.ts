import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, ElementRef, TemplateRef, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
    public objectMessage = {message: 'hello1'}
    @ViewChild(ChildComponent) private _childInstance: ChildComponent
    @ViewChild(ChildComponent) private _childInstance1: ChildComponent
    // @ViewChild('thisIsChildWeWant') private _childInstance: ChildComponent
    @ViewChildren(ChildComponent) private _childs;
    public messageFromParent: string = 'hello transclusion';
    @ViewChild('getMeThisDom') private _element: ElementRef
    @ViewChild('dynamicSlot', {read: ViewContainerRef}) private _containerView: ViewContainerRef;
    @ViewChild('commonSnippet') private _commonSnippet: TemplateRef<any>;
    public item2: string = 'world';

    constructor(private _userService: UserService, private _factoryResolver: ComponentFactoryResolver) {}

  public ngOnInit() {
      setTimeout(() => {
        // this.objectMessage['message'] = 'hello2';
        console.log('changing the input refrence');
        this.objectMessage = {message: 'hello2'}
        this._userService.user.next({username: 'yariv'});
      }, 2000);

      const componentFactory: ComponentFactory<ChildComponent> = this._factoryResolver.resolveComponentFactory(ChildComponent);
      this._containerView.createComponent(componentFactory);
  }

  printMessage(message: string) {
      console.log(message);
  }

  /**
   * the ViewChild will be populated
   */
  public ngAfterViewInit() {
    this._childInstance.timerEvent;
    setTimeout(() => {
        this._containerView.createEmbeddedView(this._commonSnippet, {item1: 'hello'});
    });
  }
}

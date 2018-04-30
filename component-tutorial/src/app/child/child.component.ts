import { Component, OnInit, ViewEncapsulation, Input, OnChanges, SimpleChanges, Output, EventEmitter, ContentChild, AfterContentInit, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '../user.service';


// child parent communication

// 1 - input
// @Input('attribute')
// primite by value others by refrence
// OnInit - properties input with values
// OnChanges - jumps when inputs change

// 2 - output
// creates event from child to parent

// 3 - ViewChild
// @ViewChild(type)
// @ViewChildren(type)
// AfterViewInit

// 4 - communication with service
// service -> subject communicate with the subject 

// 5 - ng-content -> transclusion -> content projection
// html  snippets from parent to child
// context snippets in parent
// capture elements from content with @ContentChild
// AfterContentInit properties will be fulfilled


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges, AfterContentInit {
    @Input('message') public objectMessage;
    @Output() public timerEvent: EventEmitter<string> = new EventEmitter();
    @ContentChild(ChildComponent) private _childInContent: ChildComponent;

  constructor(private _userService: UserService) { }

  /**
   * this will jump when the input is changed
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    // debugger;
    console.log('ngOnChanges');
  }

  /**
   * the value of objectMessage will be populated
   */
  ngOnInit() {
      setTimeout(() => {
        this.timerEvent.emit('hello from event');
      }, 3000);

      this._userService.user.subscribe((user: any) => {
        console.log(user.username);
      })
  }

  /**
   * the content children will be in properties
   */
  public ngAfterContentInit() {

  }

}

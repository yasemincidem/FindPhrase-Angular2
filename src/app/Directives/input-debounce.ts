/**
 * Created by yasin_000 on 29.1.2016.
 */
import {Component, Input, Output, ElementRef, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'input-debounce',
  template: '<input type="text" class="form-control" [placeholder]="placeholder" [(ngModel)]="inputValue">'
})
export class InputDebounceComponent {
  @Input() placeholder: string;
  @Input() delay: number = 300;
  @Output() value: EventEmitter<any> = new EventEmitter();

  public inputValue: string;

  constructor(private elementRef: ElementRef) {
    const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();

    eventStream.subscribe(input => this.value.emit(input));
  }
}

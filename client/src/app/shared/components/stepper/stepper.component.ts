import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input() steps: number = 0;

  @Output() messageEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickStepper(value: number): void {
    this.steps = value;
    this.messageEvent.emit(this.steps);
  }



}

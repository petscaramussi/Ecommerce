import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-payments',
  templateUrl: './checkout-payments.component.html',
  styleUrls: ['./checkout-payments.component.scss']
})
export class CheckoutPaymentsComponent {

  steps: number = 0;
  @Output() messageEvent = new EventEmitter<number>();

  constructor() { }

  goToReviewOrBack(value: number): void {
    this.steps = value;
    this.messageEvent.emit(this.steps);
  }

}

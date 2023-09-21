import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent {
  steps: number = 0;
  @Output() messageEvent = new EventEmitter<number>();

  constructor() { }


  goToReviewOrBack(value: number): void {
    this.steps = value;
    this.messageEvent.emit(this.steps);
  }


}

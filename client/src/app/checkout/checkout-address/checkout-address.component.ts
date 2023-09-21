import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent {
  @Input() checkoutForm?: FormGroup;
  @Output() messageEvent = new EventEmitter<number>();

  steps: number = 0;

  constructor() { }

  goToDelivery(value: number): void {
    this.steps = value;
    this.messageEvent.emit(this.steps);
  }



}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/modules/admin/services/payment.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
  constructor(private rs:PaymentService,private r:Router){}
  formDonation : FormGroup = new FormGroup({
    amount: new FormControl('',[Validators.required,Validators.min(0)])
  })

  get amount():FormControl{
    return this.formDonation.get('amount') as FormControl;
  }

  donate() {
    this.rs.createPaymentIntent(this.amount.value).subscribe();
    
  }

}

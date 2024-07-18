import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Campaign } from 'src/app/modules/admin/classes/campaign';
import { CampaignStatus } from 'src/app/modules/admin/classes/campaign-status';
import { FundingType } from 'src/app/modules/admin/classes/funding-type';
import { User } from 'src/app/modules/admin/classes/user';
import { CampaignService } from 'src/app/modules/admin/services/campaign.service';
import { UserService } from 'src/app/modules/admin/services/user.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})

 

export class CreateCampaignComponent implements OnInit {
  campaignForm: FormGroup;
  currentUser: User;
  fundingTypes = Object.values(FundingType);
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private campaignService: CampaignService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      this.initializeForm();
    });
  }


  dateRangeValidator(startDateKey: string, endDateKey: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const startDate = group.get(startDateKey)?.value;
      const endDate = group.get(endDateKey)?.value;
  
      return startDate && endDate && startDate > endDate ? { dateRangeInvalid: true } : null;
    };
  }

  initializeForm(): void {
    this.campaignForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      targetAmount: ['', [Validators.required, Validators.min(0)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      fundingType: ['', Validators.required]
    }, { validator: this.dateRangeValidator('startDate', 'endDate') });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.campaignForm.get(controlName);
    return control?.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
    this.successMessage = null;
    this.errorMessage = null;

    if (this.campaignForm.invalid) {
      return;
    }

    const newCampaign: Campaign = {
      ...this.campaignForm.value,
      status: CampaignStatus.PENDING,
      creator: this.currentUser,
      currentAmount: 0, // Initial amount
      investments: new Set(),
      donations: new Set()
    };

    this.campaignService.createCampaign(newCampaign).subscribe(response => {
      this.successMessage = 'Campaign created successfully';
      this.campaignForm.reset();
    }, error => {
      this.errorMessage = 'Error creating campaign';
    });
  }
}

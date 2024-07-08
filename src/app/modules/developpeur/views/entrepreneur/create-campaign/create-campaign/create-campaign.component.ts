import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from 'src/app/modules/admin/classes/campaign';
import { CampaignService } from 'src/app/modules/admin/services/campaign.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent {
  campaign: Campaign = new Campaign();
  fundingTypes: any;
  

  constructor(
    private campaignService: CampaignService,
    private router: Router
  ) { }

  ngOnInit() {
    // Initialize the current user
    // You can fetch this from a user service or authentication service
    // Example:
    // this.currentUser = this.authService.getCurrentUser();
  }

  onSubmit() {
    

    this.campaignService.createCampaign(this.campaign).subscribe(
      (data) => {
        console.log('Campaign created successfully', data);
        this.router.navigate(['/campaigns']); // Navigate to the list of campaigns or the campaign detail page
      },
      (error) => {
        console.error('Error creating campaign', error);
      }
    );

}
}

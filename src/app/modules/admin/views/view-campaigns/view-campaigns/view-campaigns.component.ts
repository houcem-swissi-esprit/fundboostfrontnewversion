import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../../services/campaign.service';
import { Campaign } from '../../../classes/campaign';

@Component({
  selector: 'app-view-campaigns',
  templateUrl: './view-campaigns.component.html',
  styleUrls: ['./view-campaigns.component.css']
})
export class ViewCampaignsComponent implements OnInit {
  campaigns: Campaign[] = [];
  campaign : Campaign = new Campaign();

  constructor(private campaignService: CampaignService) { } //injecter le service dans le composant

  ngOnInit() {
    this.getAllCampaigns();
  }

  getAllCampaigns() {
    this.campaignService.getAllCampaigns().subscribe((campaigns: Campaign[]) => {
      this.campaigns = campaigns;
    });
  }
  getCampaignsByTypes() {
    this.campaignService.getCampaignById(3).subscribe((campaign: Campaign) => {
      this.campaign = campaign;
    });
  }
}

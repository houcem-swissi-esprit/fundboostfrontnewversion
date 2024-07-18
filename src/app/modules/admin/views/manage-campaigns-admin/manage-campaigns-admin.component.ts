import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';
import { Campaign, CampaignStatus, FundingType } from '../../classes/campaign';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-campaigns-admin',
  templateUrl: './manage-campaigns-admin.component.html',
  styleUrls: ['./manage-campaigns-admin.component.css']
})


export class ManageCampaignsAdminComponent implements OnInit {
  campaigns: Campaign[] = [];
  filteredCampaigns: Campaign[] = [];
  originalCampaigns: Campaign[] = [];
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  searchCriteria = {
    creatorUsername: '',
    title: '',
    status: '',
    fundingType: '',
    targetAmount: '',
    currentAmount: '',
    startDate: '',
    endDate: ''
  };

  constructor(private campaignService: CampaignService, private router: Router) {}

  ngOnInit(): void {
    this.loadCampaigns();
  }

  loadCampaigns(): void {
    this.campaignService.getAllCampaigns().subscribe(
      (data) => {
        this.campaigns = data;
        this.originalCampaigns = [...data];
        this.filteredCampaigns = [...data];
      },
      (error) => {
        console.error('Error fetching campaigns', error);
      }
    );
  }

  sort(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredCampaigns.sort((a, b) => {
      let valueA = this.getPropertyValue(a, column);
      let valueB = this.getPropertyValue(b, column);

      if (typeof valueA === 'string') {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  getPropertyValue(obj: any, property: string): any {
    return property.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  resetSort(): void {
    this.filteredCampaigns = [...this.originalCampaigns];
    this.sortColumn = '';
    this.sortDirection = 'asc';
  }

  viewDetails(campaignId: number): void {
    this.router.navigate(['/campaign-details', campaignId]);
  }

  filterCampaigns(): void {
    this.filteredCampaigns = this.campaigns.filter(campaign => {
      return (
        (!this.searchCriteria.creatorUsername || campaign.creator.username.toLowerCase().includes(this.searchCriteria.creatorUsername.toLowerCase())) &&
        (!this.searchCriteria.title || campaign.title.toLowerCase().includes(this.searchCriteria.title.toLowerCase())) &&
        (!this.searchCriteria.status || campaign.status === this.searchCriteria.status) &&
        (!this.searchCriteria.fundingType || campaign.fundingType === this.searchCriteria.fundingType) &&
        (!this.searchCriteria.targetAmount || campaign.targetAmount === +this.searchCriteria.targetAmount) &&
        (!this.searchCriteria.currentAmount || campaign.currentAmount === +this.searchCriteria.currentAmount) &&
        (!this.searchCriteria.startDate || new Date(campaign.startDate).toISOString().slice(0, 10) === this.searchCriteria.startDate) &&
        (!this.searchCriteria.endDate || new Date(campaign.endDate).toISOString().slice(0, 10) === this.searchCriteria.endDate)
      );
    });
  }

  resetFilters(): void {
    this.searchCriteria = {
      creatorUsername: '',
      title: '',
      status: '',
      fundingType: '',
      targetAmount: '',
      currentAmount: '',
      startDate: '',
      endDate: ''
    };
    this.filteredCampaigns = [...this.campaigns];
  }
}

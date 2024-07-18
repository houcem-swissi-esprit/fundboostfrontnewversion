import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from 'src/app/modules/admin/classes/campaign';
import { CampaignStatus } from 'src/app/modules/admin/classes/campaign-status';
import { FundingType } from 'src/app/modules/admin/classes/funding-type';
import { CampaignService } from 'src/app/modules/admin/services/campaign.service';

interface SearchCriteria {
  title?: string;
  targetMin?: number;
  targetMax?: number;
  startDate?: string;
  endDate?: string;
  fundingType?: FundingType | '';
}

@Component({
  selector: 'app-view-campaigns-donator',
  templateUrl: './view-campaigns-donator.component.html',
  styleUrls: ['./view-campaigns-donator.component.css']
})
export class ViewCampaignsDonatorComponent implements OnInit {

  campaigns: Campaign[] = [];
  originalCampaigns: Campaign[] = [];
  filteredCampaigns: Campaign[] = [];
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' | '' = '';
  searchCriteria: SearchCriteria = {};
  


  constructor(private campaignService: CampaignService, private router: Router) { }

  ngOnInit(): void {
    this.loadCampaigns();
  }

  loadCampaigns(): void {
    this.campaignService.getAllCampaigns().subscribe((data: Campaign[]) => {
      this.campaigns = data.filter(campaign => campaign.status === CampaignStatus.APPROVED);
      this.originalCampaigns = [...this.campaigns];
      this.filteredCampaigns = [...this.campaigns];
    });
  }

  sortCampaigns(column: string): void {
    if (this.sortColumn === column) {
      if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc';
      } else if (this.sortDirection === 'desc') {
        this.sortDirection = '';
      } else {
        this.sortDirection = 'asc';
      }
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    if (this.sortDirection === '') {
      this.campaigns = [...this.originalCampaigns];
    } else {
      this.campaigns.sort((a, b) => {
        let comparison = 0;
        if (a[column] > b[column]) {
          comparison = 1;
        } else if (a[column] < b[column]) {
          comparison = -1;
        }
        return this.sortDirection === 'asc' ? comparison : -comparison;
      });
    }
  }

  applyFilters(): void {
    this.filteredCampaigns = this.originalCampaigns.filter(campaign => {
      const matchesTitle = !this.searchCriteria.title || campaign.title.toLowerCase().includes(this.searchCriteria.title.toLowerCase());
      const matchesTargetMin = !this.searchCriteria.targetMin || campaign.targetAmount >= this.searchCriteria.targetMin;
      const matchesTargetMax = !this.searchCriteria.targetMax || campaign.targetAmount <= this.searchCriteria.targetMax;
      const matchesStartDate = !this.searchCriteria.startDate || new Date(campaign.startDate) >= new Date(this.searchCriteria.startDate);
      const matchesEndDate = !this.searchCriteria.endDate || new Date(campaign.endDate) <= new Date(this.searchCriteria.endDate);
      const matchesFundingType = !this.searchCriteria.fundingType || campaign.fundingType === this.searchCriteria.fundingType;

      return matchesTitle && matchesTargetMin && matchesTargetMax && matchesStartDate && matchesEndDate && matchesFundingType;
    });
  }

  openDonateOrInvest(campaign: Campaign): void {
    if (campaign.fundingType === FundingType.DONATIONBASED) {
      window.open(`/donate/${campaign.id}`, '_blank');
    } else if (campaign.fundingType === FundingType.EQUITYBASED) {
      window.open(`/invest/${campaign.id}`, '_blank');
    }
  }

  viewDetails(campaign: Campaign): void {
    this.router.navigate([`/campaign-details/${campaign.id}`]);
  }
}

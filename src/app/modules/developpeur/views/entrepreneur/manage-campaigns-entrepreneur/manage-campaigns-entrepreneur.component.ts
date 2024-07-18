import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Campaign } from 'src/app/modules/admin/classes/campaign';
import { User } from 'src/app/modules/admin/classes/user';
import { CampaignService } from 'src/app/modules/admin/services/campaign.service';
import { UserService } from 'src/app/modules/admin/services/user.service';

@Component({
  selector: 'app-manage-campaigns-entrepreneur',
  templateUrl: './manage-campaigns-entrepreneur.component.html',
  styleUrls: ['./manage-campaigns-entrepreneur.component.css']
})
export class ManageCampaignsEntrepreneurComponent implements OnInit {
  campaigns: Campaign[] = [];
  sortedCampaigns: Campaign[] = [];
  currentUser: Observable<User>;
  user: User
  viewAsTable: boolean = false;
  sortField: string = '';
  sortOrder: string = 'asc';

  constructor(private campaignService: CampaignService, private userService: UserService,  private router: Router) {
    this.currentUser = this.userService.getCurrentUser();
   }

  ngOnInit(): void {
    this.currentUser.subscribe(user => { this.user = user}); // Method to get the current user
    this.loadCampaigns();
    this.sortedCampaigns = [...this.campaigns];
  }

  loadCampaigns(): void {
    this.campaignService.getCampaignsByCreator(this.user).subscribe({
      next: (campaigns: Campaign[]) => {
        this.campaigns = campaigns;
      },
      error: (error: any) => {
        console.error('Error fetching campaigns', error);
      }

    });
  }

  toggleView(): void {
    this.viewAsTable = !this.viewAsTable;
  }

  viewCampaignDetails(campaignId: number): void {
    this.router.navigate(['/my-campaign-detail', campaignId]);
  
  }

    sortColumn(column: string): void {
      if (this.sortField === column) {
        // Toggle sort order or reset
        if (this.sortOrder === 'asc') {
          this.sortOrder = 'desc';
        } else if (this.sortOrder === 'desc') {
          this.sortOrder = '';
          this.sortField = '';
          this.sortedCampaigns = [...this.campaigns]; // Reset to original order
          return;
        } else {
          this.sortOrder = 'asc';
        }
      } else {
        this.sortField = column;
        this.sortOrder = 'asc';
      }
      this.applySort();
    }
  
    applySort(): void {
      if (this.sortField) {
        this.sortedCampaigns.sort((a, b) => {
          let fieldA = a[this.sortField];
          let fieldB = b[this.sortField];
  
          if (fieldA instanceof Date && fieldB instanceof Date) {
            fieldA = fieldA.getTime();
            fieldB = fieldB.getTime();
          } else {
            fieldA = fieldA.toString().toLowerCase();
            fieldB = fieldB.toString().toLowerCase();
          }
  
          if (fieldA < fieldB) {
            return this.sortOrder === 'asc' ? -1 : 1;
          }
          if (fieldA > fieldB) {
            return this.sortOrder === 'asc' ? 1 : -1;
          }
          return 0;
        });
      }
    }



  }








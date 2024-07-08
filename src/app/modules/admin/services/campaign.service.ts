
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campaign } from 'src/app/modules/admin/classes/campaign';
import { CampaignStatus } from 'src/app/modules/admin/classes/campaign-status';
import { FundingType } from 'src/app/modules/admin/classes/funding-type';
import { User } from 'src/app/modules/admin/classes/user';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private apiUrl = 'http://localhost:8083/campaigns';

  constructor(private http: HttpClient) { }

  createCampaign(campaign: Campaign): Observable<Campaign> {
    campaign.status = CampaignStatus.PENDING; // Default status
    return this.http.post<Campaign>(`${this.apiUrl}`, campaign);
  }

  getCampaignById(campaignId: number): Observable<Campaign> {
    return this.http.get<Campaign>(`${this.apiUrl}/${campaignId}`);
  }

  getCampaignsByCreator(creator: User): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(`${this.apiUrl}/creator/${creator.idUser}`);
  }

  getAllCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.apiUrl);
  }

  updateCampaignStatus(campaignId: number, status: CampaignStatus): Observable<Campaign> {
    return this.http.put<Campaign>(`${this.apiUrl}/${campaignId}/status`, { status });
  }

  getCampaignsByFundingType(fundingType: FundingType): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(`${this.apiUrl}/funding-type/${fundingType}`);
  }
}
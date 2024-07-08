import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Investment } from 'src/app/modules/admin/classes/investment';
import { User } from 'src/app/modules/admin/classes/user';
import { Campaign } from 'src/app/modules/admin/classes/campaign';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private apiUrl = 'http://localhost:8083/investments';

  constructor(private http: HttpClient) { }

  investInCampaign(investment: Investment): Observable<Investment> {
    return this.http.post<Investment>(`${this.apiUrl}`, investment);
  }

  getInvestmentsByInvestor(investor: User): Observable<Investment[]> {
    return this.http.get<Investment[]>(`${this.apiUrl}/investor/${investor.idUser}`);
  }

  getInvestmentsByCampaign(campaign: Campaign): Observable<Investment[]> {
    return this.http.get<Investment[]>(`${this.apiUrl}/campaign/${campaign.id}`);
  }

  sellShares(investmentId: number, percentageToSell: number): Observable<Investment> {
    return this.http.put<Investment>(`${this.apiUrl}/${investmentId}/sell`, { percentageToSell });
  }

  buyShares(investmentId: number, buyer: User, percentageToBuy: number): Observable<Investment> {
    const requestBody = { investmentId, buyerId: buyer.idUser, percentageToBuy };
    return this.http.put<Investment>(`${this.apiUrl}/${investmentId}/buy`, requestBody);
  }
}

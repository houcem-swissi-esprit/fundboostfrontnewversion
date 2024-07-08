import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donation } from 'src/app/modules/admin/classes/donation';
import { User } from 'src/app/modules/admin/classes/user';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private apiUrl = 'http://localhost:8083/donations';

  constructor(private http: HttpClient) { }

  donateToCampaign(donation: Donation): Observable<Donation> {
    return this.http.post<Donation>(`${this.apiUrl}`, donation);
  }

  getDonationsByDonator(donator: User): Observable<Donation[]> {
    return this.http.get<Donation[]>(`${this.apiUrl}/donator/${donator.idUser}`);
  }
}

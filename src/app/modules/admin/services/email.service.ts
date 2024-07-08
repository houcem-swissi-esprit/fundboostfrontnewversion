import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:8083/emails';

  constructor(private http: HttpClient) { }

  sendEmail(toEmail: string, subject: string, body: string): Observable<void> {
    const emailData = { toEmail, subject, body };
    return this.http.post<void>(`${this.apiUrl}/send`, emailData);
  }
}

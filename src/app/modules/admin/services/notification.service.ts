import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationRequest } from 'src/app/modules/admin/classes/notification-request';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:8083/notifications';

  constructor(private http: HttpClient) { }

  sendNotification(request: NotificationRequest): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/send`, request);
  }
}

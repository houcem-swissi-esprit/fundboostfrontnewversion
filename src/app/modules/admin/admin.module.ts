import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './layout/admin/admin.component';
import { ListDeveloppeurComponent } from './views/list-developpeur/list-developpeur.component';
import { AccountListComponent } from './views/account-list/account-list.component';
import { NotificationRequestComponent } from './views/manage-notifications/notification-request/notification-request.component';
import { ManageCampaignsAdminComponent } from './views/manage-campaigns-admin/manage-campaigns-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListDeveloppeurComponent,
    AccountListComponent,
    NotificationRequestComponent,
    ManageCampaignsAdminComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloppeurRoutingModule } from './developpeur-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeveloppeurComponent } from './layout/developpeur/developpeur.component';
import { DonateComponent } from './views/donator/donate/donate/donate.component';
import { CreateCampaignComponent } from './views/entrepreneur/create-campaign/create-campaign/create-campaign.component';
import { InvestComponent } from './views/investor/invest/invest/invest.component';
import { DashboardDonatorComponent } from './views/donator/dashboard/dashboard-donator/dashboard-donator.component';
import { DashboardEntrepreneurComponent } from './views/entrepreneur/dashboard/dashboard-entrepreneur/dashboard-entrepreneur.component';
import { ViewCampaignsComponent } from './views/donator/view-campaigns/view-campaigns/view-campaigns.component';
import { ManageCampaignsEntrepreneurComponent } from './views/entrepreneur/manage-campaigns/manage-campaigns-entrepreneur/manage-campaigns-entrepreneur.component';
import { ManagePortfolioComponent } from './views/investor/manage portfolio/manage-portfolio/manage-portfolio.component';
import { DashboardInvestorComponent } from './views/investor/dashboard/dashboard-investor/dashboard-investor.component';
import { ViewCampaignsInvestorComponent } from './views/investor/view-campaigns/view-campaigns-investor/view-campaigns-investor.component';
import { TradeSharesComponent } from './views/investor/trade shares/trade-shares/trade-shares.component';
import { CreateCampaignUserComponent } from './views/user/create-campaign/create-campaign-user/create-campaign-user.component';
import { DashboardUserComponent } from './views/user/dashboard/dashboard-user/dashboard-user.component';
import { ManageCampaignsUserComponent } from './views/user/manage-campaigns/manage-campaigns-user/manage-campaigns-user.component';



@NgModule({
  declarations: [
    DeveloppeurComponent,
    DonateComponent,
    CreateCampaignComponent,
    InvestComponent,
    DashboardDonatorComponent,
    DashboardEntrepreneurComponent,
    ViewCampaignsComponent,
    ManageCampaignsEntrepreneurComponent,
    ManagePortfolioComponent,
    DashboardInvestorComponent,
    ViewCampaignsInvestorComponent,
    TradeSharesComponent,
    CreateCampaignUserComponent,
    DashboardUserComponent,
    ManageCampaignsUserComponent
  ],
  imports: [
    CommonModule,
    DeveloppeurRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DeveloppeurModule { }

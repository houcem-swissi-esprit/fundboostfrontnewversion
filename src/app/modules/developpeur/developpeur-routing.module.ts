import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloppeurComponent } from './layout/developpeur/developpeur.component';
import { CreateCampaignComponent } from './views/entrepreneur/create-campaign/create-campaign.component';
import { ViewCampaignsDonatorComponent } from './views/donator/view-campaigns-donator/view-campaigns-donator.component';
import { MyCampaignDetailComponent } from './views/my-campaign-detail/my-campaign-detail.component';
import { ManageCampaignsEntrepreneurComponent } from './views/entrepreneur/manage-campaigns-entrepreneur/manage-campaigns-entrepreneur.component';

const routes: Routes = [
  { path: '', component: DeveloppeurComponent, children:[
    {path:'create-campaign', component:CreateCampaignComponent},
    {path:'mycampaigns', component:ManageCampaignsEntrepreneurComponent},
    {path:'campaigns-frontoffice', component:ViewCampaignsDonatorComponent},
    { path: 'campaign-detail/:id', component: MyCampaignDetailComponent },
    ]},

  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloppeurRoutingModule { }

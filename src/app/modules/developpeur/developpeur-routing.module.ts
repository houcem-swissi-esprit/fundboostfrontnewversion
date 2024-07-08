import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloppeurComponent } from './layout/developpeur/developpeur.component';
import { CreateCampaignComponent } from './views/entrepreneur/create-campaign/create-campaign/create-campaign.component';

const routes: Routes = [
  { path: '', component: DeveloppeurComponent, children:[
    {path:'create-campaign', component:CreateCampaignComponent},
    ]},

  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloppeurRoutingModule { }

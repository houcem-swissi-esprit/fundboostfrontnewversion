import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAcceuilComponent } from './home/pageAcceuil/page-acceuil/page-acceuil.component';
import { DonateComponent } from './modules/developpeur/views/donator/donate/donate.component';
import { RegisterComponent } from './modules/developpeur/views/register/register.component';
import { LoginComponent } from './modules/developpeur/views/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:PageAcceuilComponent},
  { path: 'admin', loadChildren:()=>import('./modules/admin/admin.module').then(x => x.AdminModule) },
  { path: 'developpeur', loadChildren:()=>import('./modules/developpeur/developpeur.module').then(x => x.DeveloppeurModule) },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

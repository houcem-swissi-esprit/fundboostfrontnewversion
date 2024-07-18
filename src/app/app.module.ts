import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module';
import { DeveloppeurModule } from './modules/developpeur/developpeur.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PageAcceuilComponent } from './home/pageAcceuil/page-acceuil/page-acceuil.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthService } from './modules/admin/services/auth.service';
import { UserService } from './modules/admin/services/user.service';
import { LoginComponent } from './modules/developpeur/views/login/login.component';
import { RegisterComponent } from './modules/developpeur/views/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAcceuilComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    DeveloppeurModule,

  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

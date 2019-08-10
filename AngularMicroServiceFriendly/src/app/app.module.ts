import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/core/component/app-header/header.component';
import { SideMenuComponent } from './components/core/component/app-side-menu/sidebar.menu.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/core/component/PageNotFoundComponent/page.not.found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SideMenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, pathMatch: 'full' },
    //  { path: 'tweets', component: TwitterComponent },
    //  { path: 'managetimeseries', component: ManageTimeseriesComponent },
      { path: '**', component: PageNotFoundComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

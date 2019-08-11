import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SampleTabComponent } from './components/Tab1/sampletab.component';
import { PageNotFoundComponent } from './components/core/component/PageNotFoundComponent/page.not.found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot([
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    { path: 'sampletab1', component: SampleTabComponent },
    { path: '**', component: PageNotFoundComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

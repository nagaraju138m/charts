import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartOneComponent } from './chart-one/chart-one.component';
import { RoundComponent } from './round/round.component';

const routes: Routes = [
  {path:'round', component:RoundComponent},
  {path:'chart', component:ChartOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

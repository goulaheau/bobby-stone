import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesPageComponent }   from './containers/rules-page/rules-page.component';

const routes: Routes = [
  {
    path: '',
    component: RulesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RulesRoutingModule {}

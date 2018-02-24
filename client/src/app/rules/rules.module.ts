import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { RulesPageComponent } from './containers/rules-page/rules-page.component';
import { RulesRoutingModule } from './rules-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RulesRoutingModule
  ],
  declarations: [RulesPageComponent]
})
export class RulesModule { }

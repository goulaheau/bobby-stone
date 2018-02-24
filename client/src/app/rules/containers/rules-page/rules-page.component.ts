import { Component, OnInit } from '@angular/core';
import { RulesService }      from '../../../core/services/rules.service';
import { Rule }              from '../../../games/models/rule';

@Component({
  selector: 'app-rules-page',
  templateUrl: './rules-page.component.html',
  styleUrls: ['./rules-page.component.scss']
})
export class RulesPageComponent implements OnInit {
  rules: Rule[];

  constructor(private rulesService: RulesService) { }

  ngOnInit() {
    this.rulesService
      .getAll()
      .subscribe(
        rules => this.rules = rules
      );
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn: false;
  @Output() logoutClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  logout() { this.logoutClick.emit(); }

  shutDown(){
    $("#audio").trigger("pause");
    $("#on").css("display", "block");
    $("#off").css("display", "none");
  }

  putOn(){
    $("#audio").trigger("play");
    $("#off").css("display", "block");
    $("#on").css("display", "none");
  }

}

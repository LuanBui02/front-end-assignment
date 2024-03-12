import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public searchItem !: string;
  constructor() { }

  ngOnInit(): void {
  }
  search(key: any) {
    this.searchItem = (key.target as HTMLInputElement).value;
  }
}

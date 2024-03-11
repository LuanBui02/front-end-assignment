import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-idea',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProuctsComponent implements OnInit {
  public filterCategory: any;
  public productList :any;
  public searchItem !: string;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
    })
  }
  search(event:any) {
    this.searchItem = (event.target as HTMLInputElement).value;
  }
}

import {Component, OnInit} from '@angular/core';
import {AdminItemService} from "../../../service/admin-item.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.scss']
})
export class AdminUpdateComponent implements OnInit {
  public updateMessage !: string;
  public products: any;
  public productsList = new BehaviorSubject([]);
  constructor(private adminService: AdminItemService) {
  }

  ngOnInit(): void {
    this.adminService.getProduct().subscribe(res => {
      this.products = res;
    });
  }

  deleteProduct(id: number) {
    this.adminService.deleteItem(id).subscribe(res => {
      if (res) {
        this.updateMessage = 'Item is deleted';
      }
    });
  }
}

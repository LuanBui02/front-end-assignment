import {Component, OnInit} from '@angular/core';
import {AdminItemService} from "../../../service/admin-item.service";

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.scss']
})
export class AdminUpdateComponent implements OnInit {
  public updateMessage !: string;
  public products: any;

  constructor(private adminService: AdminItemService) {
  }

  ngOnInit(): void {
    this.adminService.getProduct().subscribe(res => {
      this.products = res;
    });
  }

  deleteProduct(id: number) {
    this.adminService.deleteItem(id).subscribe();
  }
}

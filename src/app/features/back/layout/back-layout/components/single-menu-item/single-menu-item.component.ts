import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-single-menu-item',
  templateUrl: './single-menu-item.component.html',
  styleUrls: ['./single-menu-item.component.scss']
})
export class SingleMenuItemComponent implements OnInit {

  @Input() menu: any = {} as any;

  user: any = {} as any;

  allowed: boolean = true;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    console.log(this.menu);
    this.user = JSON.parse(this.storageService.getItem('currentUser'));
    console.log(this.user);

    if(this.menu.admin_role !== 'all') {
      if(this.menu.admin_role !== this.user.admin_role) {
        this.allowed = false;
      }
    }
  }

}

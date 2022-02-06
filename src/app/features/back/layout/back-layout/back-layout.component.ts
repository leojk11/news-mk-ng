import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { User } from '../../services/users.service';
import { SIDE_BAR_ITEMS } from '../side-nav.data';

@Component({
  selector: 'app-back-layout',
  templateUrl: './back-layout.component.html',
  styleUrls: ['./back-layout.component.scss']
})
export class BackLayoutComponent implements OnInit {

  menus: any[] = SIDE_BAR_ITEMS;

  user: User = {} as User;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user);
  }
}

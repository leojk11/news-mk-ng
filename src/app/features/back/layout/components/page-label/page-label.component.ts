import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-label',
  templateUrl: './page-label.component.html',
  styleUrls: ['./page-label.component.scss']
})
export class PageLabelComponent implements OnInit {

  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}

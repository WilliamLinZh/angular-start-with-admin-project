import { Component, OnInit } from '@angular/core';

import { SiteService } from './site.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  storeDisplay: boolean = true;
  adminDisplay: boolean = false;

  constructor(private siteService: SiteService) {}

  ngOnInit(): void {
    this.siteService.siteDisplayMessage.subscribe((msg) =>
      this.onSwitchSite(msg)
    );
  }

  onSwitchSite(msg: string) {
    if (msg == 'admin') {
      this.storeDisplay = false;
      this.adminDisplay = true;
    } else {
      this.storeDisplay = true;
      this.adminDisplay = false;
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

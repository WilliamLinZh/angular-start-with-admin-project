import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SiteService {
  private siteUpdateMessage = new BehaviorSubject('store');
  siteDisplayMessage = this.siteUpdateMessage.asObservable();

  constructor() {}

  updateSiteMessage(message: string) {
    this.siteUpdateMessage.next(message);
  }
}

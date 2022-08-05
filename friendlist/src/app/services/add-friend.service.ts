import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from '../models/friend';

@Injectable({
  providedIn: 'root',
})
export class AddFriendService {
  private _url: string = 'http://localhost:6969/';

  constructor(private http: HttpClient) {}

  addFriend(friend: Friend) {
    return this.http.post(this._url + 'allFriends', friend);
  }
}

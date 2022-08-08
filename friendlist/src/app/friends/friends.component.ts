import { Component, OnInit } from '@angular/core';
import { GetFriendsService } from '../services/get-friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  private _allFriends: Array<Object>;
  constructor(private getFriendsService: GetFriendsService) {
    this._allFriends = new Array<any>();
  }

  ngOnInit(): void {
    this.fetchFriends();
  }

  private fetchFriends(): void {
    this.getFriendsService.getFriends().then((friends) => {
      this._allFriends = friends;
      console.log(this._allFriends);
    });
  }

  get allFriends(): Array<any> {
    return this._allFriends;
  }
}

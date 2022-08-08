import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friend';
import { AddFriendService } from '../services/add-friend.service';
import { GetFriendsService } from '../services/get-friends.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  languages: Array<string> = ['html', 'css', 'javascript', 'php'];
  friendModel = new Friend('', '', '', '', '');

  protected _allFriends: Array<Object>;

  constructor(
    private addFriendService: AddFriendService,
    private getFriendsService: GetFriendsService
  ) {
    this._allFriends = new Array<Object>();
  }

  ngOnInit(): void {
    this.getFriendsService.getFriends();
  }

  submitForm() {
    const observable = this.addFriendService.addFriend(this.friendModel);

    observable.subscribe({
      next: (data) => {
        console.log(data);
        console.log('success!');
        this.getFriendsService.getFriends();
        this.getFriendsService.getFriends().then((result) => {
          console.log(result);
        });
      },
      error: (error) => {
        console.log(error);
        console.log('failed');
      },
    });
  }

  get allFriends(): Array<Object> {
    return this._allFriends;
  }
}

import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friend';
import { AddFriendService } from '../services/add-friend.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  languages: Array<string> = ['html', 'css', 'javascript', 'php'];
  friendModel = new Friend('', '', '', '', '');
  allFriendsUrl: string = 'http://localhost:6969/allFriends';

  protected _allFriends: Array<Object>;

  constructor(private addFriendService: AddFriendService) {
    this._allFriends = new Array<Object>();
  }

  ngOnInit(): void {
    this.getFriends(this.allFriendsUrl);
  }

  submitForm() {
    const observable = this.addFriendService.addFriend(this.friendModel);

    observable.subscribe({
      next: (data) => {
        console.log(data);
        console.log('success!');
        this.getFriends(this.allFriendsUrl);
      },
      error: (error) => {
        console.log(error);
        console.log('failed');
      },
    });
  }
  public async getFriends(url: string): Promise<any> {
    try {
      const data = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      this._allFriends = await data.json();
    } catch (err) {
      console.log('An error has ocurred: ' + err);
    }
  }
  get allFriends(): Array<Object> {
    return this._allFriends;
  }
}

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
  allFriends: any;
  allFriendsUrl: string = 'http://localhost:6969/allFriends';

  constructor(private addFriendService: AddFriendService) {}

  ngOnInit(): void {
    this.getFriends(this.allFriendsUrl);
  }

  submitForm() {
    const observable = this.addFriendService.addFriend(this.friendModel);
    console.log(observable);

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
      this.allFriends = await data.json();
      console.log(this.allFriends);
    } catch (err) {
      console.log('An error has ocurred: ' + err);
    }
  }
}

import { Component, OnInit } from '@angular/core';
// import { observable } from 'rxjs';
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

  constructor(private addFriendService: AddFriendService) {}

  ngOnInit(): void {}

  submitForm() {
    const observable = this.addFriendService.addFriend(this.friendModel);
    console.log(observable);

    observable.subscribe({
      next: (data) => {
        console.log(data);
        console.log('success!');
      },
      error: (error) => {
        console.log(error);
        console.log('failed');
      },
    });
  }
}

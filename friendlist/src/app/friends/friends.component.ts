import { Component, OnInit } from '@angular/core';
import { GetFriendsService } from '../services/get-friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  constructor(private getFriendsService: GetFriendsService) {}

  ngOnInit(): void {
    this.getFriendsService.getFriends().then((result) => {
      console.log(result);
    });
  }
}

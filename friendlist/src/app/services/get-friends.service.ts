import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetFriendsService {
  allFriendsUrl: string = 'http://localhost:6969/allFriends';
  constructor() {}

  public async getFriends(): Promise<any> {
    try {
      const data = await fetch(this.allFriendsUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return data.json();
    } catch (err) {
      console.log('An error has ocurred: ' + err);
    }
  }
}

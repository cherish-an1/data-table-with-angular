import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Friend {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public department: string,
    public email: string,
    public country: string
  ) {
  }
}

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  friends : Friend[] = [];

  constructor(
   private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getFriends()
  }

  getFriends(){
    this.httpClient.get<any>('http://localhost:9001/friends').subscribe(
      response => {
        console.log(response);
        this.friends = response;
      }
    );
  }
}

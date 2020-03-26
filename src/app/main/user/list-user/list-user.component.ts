import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service'
import {User} from '../shared/user.model'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styles: []
})
export class ListUserComponent implements OnInit {

  public userList:User[];
  public defaultUserImg:string = 'assets/img/users/no-img.png'
  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.listUsers().subscribe(
      data => this.userList = data,
      err => console.log(err)
    )
  }

}

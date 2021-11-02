import { Component, OnInit } from '@angular/core';
import {UserAccountService} from "../../services/user-account.service";
import {Gameslist} from "../../models/gameslist";
import {ApiPlatform} from "../../models/apiplatform";
import {Useraccount} from "../../models/useraccount";

@Component({
  selector: 'app-account-index',
  templateUrl: './account-index.component.html',
  styleUrls: ['./account-index.component.scss']
})
export class AccountIndexComponent implements OnInit {

  arrayUserAccount: Array<Useraccount> = [];
  page: number = 1;

  constructor(
    public userAccountService: UserAccountService,
  ) { }

  ngOnInit(): void {
    this.displayUserAccount();
  }

  displayUserAccount(){
    this.userAccountService.getUserAccountList().subscribe((data ) =>{
      console.log(data);
      this.arrayUserAccount = data["hydra:member"];
    })
  }

}

import { Component} from '@angular/core';
import {UserAccountService} from "../../services/user-account.service";
import {Useraccount} from "../../models/useraccount";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent{

  user: Useraccount = new Useraccount();

  minLength: number = 3;

  constructor(private userAccountService: UserAccountService) {
  }

  onSubmit(): void {
    alert('User account has been registered!');
    console.log(this.user);
    this.userAccountService.addUserAccount(this.user);
    console.log(this.userAccountService);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPlatform} from "../models/apiplatform";
import {Useraccount} from "../models/useraccount";

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  private _arrayUser: Array<Useraccount> = [];

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUserAccountList(): Observable<ApiPlatform<Useraccount>>{
    return this.httpClient.get<ApiPlatform<Useraccount>>( 'https://steam-ish.test-02.drosalys.net/api/accounts?page=1')
  }


  get arrayUser(): Array<Useraccount> {
    return this._arrayUser;
  }

  set arrayUser(value: Array<Useraccount>) {
    this._arrayUser = value;
  }

  addUserAccount(user: Useraccount){
    user.wallet = 0;
    this._arrayUser.push(user);
  }

}

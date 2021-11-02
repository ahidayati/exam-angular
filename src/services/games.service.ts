import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Games} from "../models/games";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  // constructor(
  //   private httpClient: HttpClient,
  // ) { }
  //
  // getGamesList(): Observable<Games>{
  //   return this.httpClient.get<Games>('https://steam-ish.test-02.drosalys.net/api/games')
  // }
}

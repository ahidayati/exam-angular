import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gameslist} from "../models/gameslist";
import {Games} from "../models/games";

@Injectable({
  providedIn: 'root'
})
export class GamesListService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getGamesList(): Observable<Gameslist>{
    return this.httpClient.get<Gameslist>('https://steam-ish.test-02.drosalys.net/api/games')
  }

  getEachGames(gamesId: number): Observable<Games>{
    return this.httpClient.get<Games>('https://steam-ish.test-02.drosalys.net/api/games/'+ gamesId)
  }
}


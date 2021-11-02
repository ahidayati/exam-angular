import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";
import {Games} from "../../models/games";
import {GamesListService} from "../../services/games-list.service";
import {Gameslist} from "../../models/gameslist";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  arrayGames : Array<Games> = [];
  page: number = 1;
  totalGames: number = 200;

  constructor(
    public gamesListService: GamesListService,
  ) { }

  ngOnInit(): void {
    this.displayGamesList()
  }

  displayGamesList(){
    this.gamesListService.getGamesList().subscribe((data: Gameslist) =>{
      console.log(data);
      this.arrayGames = data["hydra:member"];
    })
  }

  //pagination doesn't work whyyyyyyyyy
  //not enough time bye pagination
  nextPage(){
    this.gamesListService.getGamesList().subscribe((data: any) =>{
      console.log(data);
      this.arrayGames = data["hydra:next"];
    })
  }
}

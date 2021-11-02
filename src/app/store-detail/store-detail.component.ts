import { Component, OnInit } from '@angular/core';
import {GamesListService} from "../../services/games-list.service";
import {ActivatedRoute} from "@angular/router";
import {Games} from "../../models/games";

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss']
})
export class StoreDetailComponent implements OnInit {

  public gamesEach: Games | null = null;
  gamesId!: number;

  constructor(
    private gamesListService: GamesListService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.gamesId = param.gamesId;
    });
    this.gamesListService.getEachGames(this.gamesId).subscribe((gamesDetail: Games) => {
      this.gamesEach = gamesDetail;
      console.log(this.gamesEach);
    });
  }

}

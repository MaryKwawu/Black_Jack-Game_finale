import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';  // Add OnInit
import { ApiService } from './api.service';

import { faWandMagic, faLightbulb, faRotateLeft, faDiamond, faUser, faLayerGroup, faBox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {  // Implement OnInit
  title = 'midnight-ace-1';

  faWandMagic = faWandMagic;
  faLightbulb = faLightbulb;
  faRotateLeft = faRotateLeft;
  faDiamond = faDiamond;
  faUser = faUser;
  faLayerGroup = faLayerGroup;
  faBox = faBox;

  players: any= [];
  cards: any= [];
  rounds: any= [];
  decks: any= [];
  newgames: any = [];
  

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // this.getPlayers();
    // this.getCards();
    // this.getRounds();
  }

  startGame() {
    const playerName = 'John'; // Your player name data
    this.apiService.startNewGame(playerName)
      .subscribe(response => {
        // Handle the API response here
        console.log('New game started:', response);
      });
  }

  getGameState(gameId: string) {
    this.apiService.getGameState(gameId)
      .subscribe(response => {
        // Handle the API response here
        console.log('Game state retrieved:', response);
      });
  }

  getPlayers() {
    this.apiService.getPlayers().subscribe(
      data => {
        console.log(data, "players")
        this.players = data;
      },
      error => {
        console.error('Error fetching players:', error);
      }
    );
  }


  getCards() {
    this.apiService.getCards().subscribe(
      data => {
        this.cards = data;
      },
      error => {
        console.error('Error fetching cards:', error);
      }
    );
  }


  getRounds() {
    this.apiService.getRounds().subscribe(
      data => {
        this.rounds = data;
      },
      error => {
        console.error('Error fetching rounds:', error);
      }
    );
  }

  getNewGames() {
    this.apiService.getNewGames().subscribe(
      data => {
        this.newgames = data;
      },
      error => {
        console.error('Error fetching newgames:', error);
      }
    );
  }


  getDecks() {
    this.apiService.getDecks().subscribe(
      data => {
        this.decks = data;
      },
      error => {
        console.error('Error fetching decks:', error);
      }
    );
  }




}







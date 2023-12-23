import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private baseUrl = 'http://127.0.0.1:5000';

  constructor(private httpClient: HttpClient) { }

  startNewGame(playerName: string): Observable<any> {
    const url = `${this.baseUrl}/blackjack/start`;
    const body = { playerName };
    return this.httpClient.post(url, body);
  }

  getGameState(gameId: string): Observable<any> {
    const url = `${this.baseUrl}/blackjack/game/${gameId}`;
    return this.httpClient.get(url);
  }

 getPlayers(){
 const url = `${this.baseUrl}/player`;
 return this.httpClient.get(url);
 }

 getCards(){
 const url = `${this.baseUrl}/card`
 return this.httpClient.get(url)
 }

getRounds(){
 const url = `${this.baseUrl}/round`
 return this.httpClient.get(url)
 }

getNewGames(){
 const url = `${this.baseUrl}/NewGames`
 return this.httpClient.get(url)
 }

 getDecks(){
  const url = `${this.baseUrl}/Decks`
  return this.httpClient.get(url)
 }

}





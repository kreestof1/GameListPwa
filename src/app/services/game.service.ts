import { Injectable } from '@angular/core';
import { Game, GameFormData } from '../models/game.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [];
  private gamesSubject = new BehaviorSubject<Game[]>([]);
  private nextId = 1;

  constructor() {
    // Load games from localStorage if available
    const savedGames = localStorage.getItem('games');
    if (savedGames) {
      this.games = JSON.parse(savedGames);
      this.nextId = Math.max(...this.games.map(g => g.id), 0) + 1;
      this.gamesSubject.next(this.games);
    }
  }

  getGames(): Observable<Game[]> {
    return this.gamesSubject.asObservable();
  }

  addGame(game: GameFormData): void {
    const newGame: Game = {
      ...game,
      id: this.nextId++
    };
    this.games.push(newGame);
    this.saveAndUpdate();
  }

  updateGame(id: number, game: GameFormData): void {
    const index = this.games.findIndex(g => g.id === id);
    if (index !== -1) {
      this.games[index] = { ...game, id };
      this.saveAndUpdate();
    }
  }

  deleteGame(id: number): void {
    this.games = this.games.filter(g => g.id !== id);
    this.saveAndUpdate();
  }

  getGameById(id: number): Game | undefined {
    return this.games.find(g => g.id === id);
  }

  private saveAndUpdate(): void {
    localStorage.setItem('games', JSON.stringify(this.games));
    this.gamesSubject.next([...this.games]);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game, GameFormData } from '../../models/game.model';
import { GameService } from '../../services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {
  games: Game[] = [];
  editingGame: Game | null = null;
  showForm = false;
  private subscription: Subscription;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.subscription = this.gameService.getGames().subscribe(
      games => this.games = games
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onAddNew() {
    this.editingGame = null;
    this.showForm = true;
  }

  onEdit(game: Game) {
    this.editingGame = { ...game };
    this.showForm = true;
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this game?')) {
      this.gameService.deleteGame(id);
    }
  }

  onFormSubmit(game: GameFormData) {
    if (this.editingGame) {
      this.gameService.updateGame(this.editingGame.id, game);
    } else {
      this.gameService.addGame(game);
    }
    this.closeForm();
  }

  onFormCancel() {
    this.closeForm();
  }

  private closeForm() {
    this.showForm = false;
    this.editingGame = null;
  }
}

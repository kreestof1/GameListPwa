import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game, GameFormData } from '../../models/game.model';

@Component({
  selector: 'app-game-form',
  standalone: false,
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @Input() game: Game | null = null;
  @Output() formSubmit = new EventEmitter<GameFormData>();
  @Output() formCancel = new EventEmitter<void>();

  gameName = '';
  selectedPlatform: 'PC' | 'PS5' | 'XBOX' = 'PC';
  platforms: Array<'PC' | 'PS5' | 'XBOX'> = ['PC', 'PS5', 'XBOX'];

  ngOnInit() {
    if (this.game) {
      this.gameName = this.game.name;
      this.selectedPlatform = this.game.platform;
    }
  }

  onSubmit() {
    if (this.gameName.trim()) {
      this.formSubmit.emit({
        name: this.gameName.trim(),
        platform: this.selectedPlatform
      });
      this.resetForm();
    }
  }

  onCancel() {
    this.resetForm();
    this.formCancel.emit();
  }

  private resetForm() {
    this.gameName = '';
    this.selectedPlatform = 'PC';
  }
}

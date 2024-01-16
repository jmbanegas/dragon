import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadDragonComponent } from './components/head-dragon/head-dragon.component';
import { ChestDragonComponent } from './components/chest-dragon/chest-dragon.component';
import { LegDragonComponent } from './components/leg-dragon/leg-dragon.component';
import { TailDragonComponent } from './components/tail-dragon/tail-dragon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeadDragonComponent, ChestDragonComponent, LegDragonComponent, TailDragonComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dragon';
}

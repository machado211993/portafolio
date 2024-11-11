import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-item-frase',
  templateUrl: './item-frase.component.html',
  styleUrl: './item-frase.component.css',
  imports: [RouterModule, RouterLink]
})
export class ItemFraseComponent {
  @Input() frase: any;
}

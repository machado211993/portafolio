import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-item-frase',
  templateUrl: './item-frase.component.html',
  styleUrl: './item-frase.component.css'
})
export class ItemFraseComponent {
  @Input() frase: any;
}

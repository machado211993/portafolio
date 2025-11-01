import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Cat {
  id?: string;
  url: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-item-gatos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-gatos.component.html',
  styleUrl: './item-gatos.component.css',
})
export class ItemGatosComponent {
  @Input() gato!: Cat;
}

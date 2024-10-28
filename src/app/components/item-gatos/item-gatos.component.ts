import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-gatos',
  standalone: true,
  templateUrl: './item-gatos.component.html',
  styleUrl: './item-gatos.component.css'
})
export class ItemGatosComponent {
  @Input() gato: any;
}

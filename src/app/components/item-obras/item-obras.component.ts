import { Component, Input, OnInit } from '@angular/core';
import { Iobra } from '../../obras.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-obras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-obras.component.html',
  styleUrls: ['./item-obras.component.css']
})
export class ItemObrasComponent implements OnInit {
  @Input() obra!: Iobra; // Asegúrate de que la obra tenga el tipo correcto
  imagenBase64: string | null = null; // Variable para almacenar la imagen en formato Base64

  ngOnInit(): void {
    if (this.obra.imagen && this.obra.imagen.contenido) {
      this.convertirABase64(this.obra.imagen.contenido);
    }
  }

  private convertirABase64(contenido: Uint8Array): void {
    // Convertimos el Uint8Array a string
    let binary = '';
    const bytes = new Uint8Array(contenido);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    // Convertimos a Base64
    this.imagenBase64 = 'data:' + this.obra.imagen.mime + ';base64,' + btoa(binary);
  }
}

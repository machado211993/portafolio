// formularios.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'] // Corrección aquí: styleUrls en plural
})
export class FormulariosComponent {
  submitted = false;
  onSubmit(formulario: any) {
    console.log('Datos del formulario:', formulario.value);
    this.submitted = true; // Indica que el formulario ha sido enviado
    formulario.reset(); // Resetea el formulario después del envío
  }
}


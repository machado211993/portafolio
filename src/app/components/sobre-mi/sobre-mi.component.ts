import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css',
})
export class SobreMiComponent {}

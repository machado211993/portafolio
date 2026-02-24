import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Todos los componentes son standalone.
// El bootstrap se maneja en main.ts con bootstrapApplication(AppComponent).
// Este módulo ya no declara ni exporta nada.

@NgModule({
  imports: [BrowserModule],
})
export class AppModule {}

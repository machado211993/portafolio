import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var emailjs: any;

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSending = false;
  showSuccess = false;
  showError = false;
  errorMsg = '';

  // ── EmailJS config ─────────────────────────────────────
  // 1. Crear cuenta gratis en https://www.emailjs.com
  // 2. Crear un Email Service (Gmail) y un Email Template
  // 3. Reemplazar los tres valores con los tuyos
  private readonly EMAILJS_SERVICE_ID = 'TU_SERVICE_ID';
  private readonly EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';
  private readonly EMAILJS_PUBLIC_KEY = 'TU_PUBLIC_KEY';

  // ── Tu número de WhatsApp ──────────────────────────────
  private readonly WA_NUMBER = '5493794862502';

  sendMessage(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.showError = true;
      this.errorMsg = 'Por favor completá nombre, email y mensaje.';
      return;
    }

    this.isSending = true;
    this.showError = false;
    this.showSuccess = false;

    // Guardar copia de los datos ANTES de limpiar el form
    const snapshot = { ...this.formData };

    const templateParams = {
      from_name: snapshot.name,
      from_email: snapshot.email,
      subject: snapshot.subject || 'Sin asunto',
      message: snapshot.message,
    };

    emailjs
      .send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams,
        this.EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        this.isSending = false;
        this.showSuccess = true;
        this.formData = { name: '', email: '', subject: '', message: '' };

        // Abrir WhatsApp con el mensaje después de 800ms (para que vean el ✓)
        this.openWhatsApp(snapshot);

        setTimeout(() => (this.showSuccess = false), 6000);
      })
      .catch((error: any) => {
        this.isSending = false;
        this.showError = true;
        this.errorMsg =
          'Error al enviar el email. Abriendo WhatsApp como alternativa...';
        console.error('EmailJS error:', error);

        // Si falla el email, igual abre WhatsApp para no perder el contacto
        this.openWhatsApp(snapshot);
      });
  }

  private openWhatsApp(data: typeof this.formData): void {
    const lines = [
      `Hola José, te escribo desde tu portfolio web.`,
      ``,
      `*Nombre:* ${data.name}`,
      `*Email:* ${data.email}`,
      data.subject ? `*Asunto:* ${data.subject}` : null,
      `*Mensaje:* ${data.message}`,
    ].filter((line): line is string => line !== null);

    const waText = lines.join('\n');
    const waUrl = `https://api.whatsapp.com/send?phone=${this.WA_NUMBER}&text=${encodeURIComponent(waText)}`;

    setTimeout(() => window.open(waUrl, '_blank'), 800);
  }
}

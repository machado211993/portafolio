import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  tags: { label: string; color: string }[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
})
export class ProyectosComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Municipalidad de Loreto',
      description:
        'Sitio web institucional para la Municipalidad de Loreto, Corrientes. Plataforma para mostrar obras, eventos, actos y canales de contacto ciudadano.',
      icon: 'bi-building',
      gradient: 'grad-blue',
      tags: [
        { label: 'Angular', color: 'tag-red' },
        { label: 'HTML5', color: 'tag-orange' },
        { label: 'CSS3', color: 'tag-blue' },
      ],
      githubUrl: 'https://github.com/machado211993/Municipalidad_Loreto',
      liveUrl: 'http://municipalidadloreto.com/',
      featured: true,
    },
    {
      id: 2,
      title: 'eCommerce Multirubro',
      description:
        'Plataforma de comercio electrónico completa con gestión de productos, carrito de compras y pasarela de pagos integrada.',
      icon: 'bi-cart3',
      gradient: 'grad-green',
      tags: [
        { label: 'Java', color: 'tag-red' },
        { label: 'Spring Boot', color: 'tag-green' },
        { label: 'MySQL', color: 'tag-cyan' },
        { label: 'HTML5', color: 'tag-orange' },
      ],
      githubUrl: 'https://github.com/machado211993/Ecommers-para-Negocios',
    },
    {
      id: 3,
      title: 'API REST con JSON',
      description:
        'Backend robusto con arquitectura REST, endpoints documentados y respuestas en formato JSON estándar para consumo de aplicaciones cliente.',
      icon: 'bi-braces',
      gradient: 'grad-purple',
      tags: [
        { label: 'Java', color: 'tag-red' },
        { label: 'Spring Boot', color: 'tag-green' },
        { label: 'MySQL', color: 'tag-cyan' },
        { label: 'REST API', color: 'tag-gray' },
      ],
      githubUrl: 'https://github.com/machado211993/apirest_egg',
    },
    {
      id: 4,
      title: 'Proyecto JHipster',
      description:
        'Aplicación full-stack generada con JHipster. Backend con Java Spring Boot, frontend Angular y base de datos MySQL. Arquitectura empresarial lista para producción.',
      icon: 'bi-stack',
      gradient: 'grad-teal',
      tags: [
        { label: 'Java', color: 'tag-red' },
        { label: 'Spring Boot', color: 'tag-green' },
        { label: 'Angular', color: 'tag-red' },
        { label: 'MySQL', color: 'tag-cyan' },
      ],
      githubUrl: 'https://github.com/machado211993/Proyecto-JHipster',
    },
    {
      id: 5,
      title: 'El Dato Barbershop',
      description:
        'Sitio web profesional para una barbería local, construido con Angular 18 standalone components. Diseño moderno con secciones de servicios, galería y contacto.',
      icon: 'bi-scissors',
      gradient: 'grad-amber',
      tags: [
        { label: 'Angular 18', color: 'tag-red' },
        { label: 'Standalone', color: 'tag-blue' },
        { label: 'TypeScript', color: 'tag-cyan' },
      ],
      githubUrl: 'https://github.com/machado211993/eldato-barbershop',
      liveUrl: 'https://eldato-barbershop.vercel.app/#/',
      featured: true,
    },
    {
      id: 6,
      title: 'Mate Store',
      description:
        'Ecommerce de mates con PHP y CodeIgniter 4. Arquitectura MVC, gestión de productos, carrito de compras y conexión a MySQL con foco en buenas prácticas y seguridad.',
      icon: 'bi-cup-hot',
      gradient: 'grad-brown',
      tags: [
        { label: 'PHP', color: 'tag-indigo' },
        { label: 'CodeIgniter 4', color: 'tag-orange' },
        { label: 'MySQL', color: 'tag-cyan' },
        { label: 'MVC', color: 'tag-gray' },
      ],
      githubUrl: 'https://github.com/machado211993/mate-store',
    },
    {
      id: 7,
      title: 'Zenith',
      description:
        'Aplicación web desarrollada con PHP y JavaScript. Arquitectura limpia enfocada en rendimiento y experiencia de usuario fluida.',
      icon: 'bi-stars',
      gradient: 'grad-pink',
      tags: [
        { label: 'PHP', color: 'tag-indigo' },
        { label: 'JavaScript', color: 'tag-yellow' },
      ],
      githubUrl: 'https://github.com/machado211993/zenith',
    },
  ];
}

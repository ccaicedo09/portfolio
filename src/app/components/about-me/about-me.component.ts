import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  name = 'Tu Nombre';
  description = `
    Soy un desarrollador backend apasionado por la creación de soluciones eficientes y escalables.
    Actualmente, me especializo en microservicios y arquitecturas basadas en Spring Boot.
  `;
  highlights = [
    'Experiencia en desarrollo backend con Spring Boot y Node.js.',
    'Conocimiento en bases de datos SQL y NoSQL.',
    'Construcción de APIs REST eficientes y seguras.',
    'Interés en arquitectura de software y buenas prácticas.'
  ];
  imageUrl = 'about-me-picture.webp';
}

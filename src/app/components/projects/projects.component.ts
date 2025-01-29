import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'CASCAI Soluciones - Empresa personal',
      description: 'Plataforma web full-stack hecha desde cero que integra tienda virtual, sistema de inventario, gestión de clientes y gestión de mantenimientos de hardware. Desarrollada con arquitectura de microservicios para servicios tecnológicos para personas individuales y empresas.',
      image: 'cascai-preview.webp',
      technologies: ['Angular', 'Bootstrap', 'Spring Boot', 'PostgreSQL', 'Microservicios'],
      demoLink: 'https:cascai.vercel.app'
    },
    {
      title: 'ActiveGym - Gestión integral para gimnasios',
      description: 'Active Gym es el sistema integral para la gestión de gimnasios, diseñado para conectar dueños, clientes y empleados de manera eficiente. Con una página totalmente centralizada para todas las operaciones de un gimnasio, permite una navegación intuitiva y sencilla para todos los usuarios.',
      image: 'activegym-preview.webp',
      technologies: ['Spring Boot', 'PostgreSQL', 'Angular', 'Bootstrap'],
      codeLink: 'https://github.com/ccaicedo09/active-gym',
      demoLink: 'https://activegym.vercel.app'
    }
  ];
}

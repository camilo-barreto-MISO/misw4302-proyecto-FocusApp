import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModulosMaterial } from '../../modulos.material';

interface Categoria {
  imagen: string;
  titulo: string;
}

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ModulosMaterial, RouterModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent implements OnChanges {
  @Input() esEdicion!: boolean;
  categorias: Categoria[] = [
    { imagen: '/images/laptop.png', titulo: 'Trabajo' },
    { imagen: '/images/pyramid.png', titulo: 'Personal' },
    { imagen: '/images/study.png', titulo: 'Estudio' },
    { imagen: '/images/book.png', titulo: 'Lectura' },
  ];

  formulario = new FormGroup({
    nombreTarea: new FormControl(),
    fecha: new FormControl(),
    hora: new FormControl(),
    cantidadSecciones: new FormControl(),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['esEdicion']) {
      this.asignarFormulario();
    }
  }

  asignarFormulario() {
    if (this.esEdicion) {
      this.formulario.patchValue({
        nombreTarea: 'Tarea 1',
        fecha: '07 de septiembre, 2024',
        hora: '02:00 pm',
        cantidadSecciones: 4,
      });
    }
  }
}

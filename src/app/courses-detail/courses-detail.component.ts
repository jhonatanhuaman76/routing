import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrl: './courses-detail.component.css'
})
export class CoursesDetailComponent {

  course: string = '';

  constructor(private route: ActivatedRoute) { }

  // El metodo ngOnInit() se ejecuta cuando el componente es creado o inicializado
  ngOnInit(): void { 
    this.route.params.subscribe(params => this.course = params['course']);
  }
}

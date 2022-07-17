// Componentes presentes no módulo
import { Component } from '@angular/core';

//Decorator
@Component({
  // Diretiva para a tag html. - bind com o componente.
  selector: 'app-root',
  //Parte visual do componente - HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager';
}

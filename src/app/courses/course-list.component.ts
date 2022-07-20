import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";


// Decorator descreve que a classe é um componente
@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
// Tornando a classe pública.
export class CourseListComponent implements OnInit{
    
    filteredCourses: Course[] = [];
    
    _courses: Course[] = [];

    // _ para informar que a variável ficará apenas no componente
    _filterBy!: string;

    constructor(private courseService: CourseService) {

    }
    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses;
    }

    // evento de entrada do input
    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    // evento de saída do input
    get filter() {
        return this._filterBy;
    }
}
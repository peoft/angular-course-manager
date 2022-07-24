import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";


// Decorator descreve que a classe é um componente
@Component ({
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
       this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        })
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
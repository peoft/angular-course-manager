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
    courses: Course[] = [];

    constructor(private courseService: CourseService) {

    }
    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
    }
}
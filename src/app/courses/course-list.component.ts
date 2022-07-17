import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


// Decorator descreve que a classe é um componente
@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
// Tornando a classe pública.
export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 45.99,
                code: 'LKL-3854',
                duration: 30,
                rating: 4,
                releaseDate: 'November, 4, 2019'
            },            
        ]
    }
}
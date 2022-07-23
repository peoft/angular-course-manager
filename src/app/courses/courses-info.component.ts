import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './courses-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    CourseId!: number;

    constructor(private activateRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.CourseId = Number(this.activateRoute.snapshot.paramMap.get('id'));

    }
}
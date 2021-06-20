import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular 8 Course Basic',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8788',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December, 1, 2019'
            },
            {
                id: 2,
                name: 'Angular 8 Course Advanced',
                imageUrl: '/assets/images/http.png',
                price: 199.99,
                code: 'XPS-8288',
                duration: 200,
                rating: 3.5,
                releaseDate: 'December, 2, 2020'
            }
        ]
    }



}
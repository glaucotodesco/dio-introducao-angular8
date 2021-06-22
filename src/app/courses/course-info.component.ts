import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: Course = { name: 'Glauco', rating: 0, code: '' };

    constructor(private route: ActivatedRoute, private courseService: CourseService) {

    }

    ngOnInit(): void {
        let courseId = Number(this.route.snapshot.paramMap.get('id'));
        this.courseService.retriveById(courseId).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error ' + err)
        });
    }



    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log(course),
            error: err => console.log(err)
        })
        
        
    }



}
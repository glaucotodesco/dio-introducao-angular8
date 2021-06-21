import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    courseId: number = 0;

    constructor(private route: ActivatedRoute){

    }

    ngOnInit(): void {

       //NaN is a possible response!
       this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    }
}
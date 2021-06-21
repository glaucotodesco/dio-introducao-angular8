import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    _courses: Course[] = [];

    _filterBy : string = '';

    filteredCourses: Course[] = [];

    constructor(private courseService: CourseService){
        this._courses = courseService.retrieveAll();
        this.filteredCourses = this._courses;
    }

    ngOnInit(): void {
       
    }

    set filter(value:string){
        this._filterBy = value;
        this.filteredCourses = this._courses.filter( c => c.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }


}
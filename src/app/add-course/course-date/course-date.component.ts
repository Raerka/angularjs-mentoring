import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../courses-list/course.service';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.css']
})
export class CourseDateComponent implements OnInit {

  public creationDate = '';
  public routerParams: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.routerParams.id = data['id'];
    });
    if (this.routerParams.id) {
      const courseItem = CourseService.getCoursesItemById(this.routerParams.id);
      this.creationDate = courseItem.creationDate;
    }
  }
}

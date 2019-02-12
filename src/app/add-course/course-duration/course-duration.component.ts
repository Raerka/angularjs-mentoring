import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../courses-list/course.service';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.css']
})
export class CourseDurationComponent implements OnInit {

  public courseDuration: number = null;
  public routerParams: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.routerParams.id = data['id'];
    });
    if (this.routerParams.id) {
      const courseItem = CourseService.getCoursesItemById(this.routerParams.id);
      this.courseDuration = courseItem.duration;
    }
  }
}

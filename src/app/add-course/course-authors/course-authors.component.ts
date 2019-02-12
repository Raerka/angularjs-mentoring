import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../courses-list/course.service';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.css']
})
export class CourseAuthorsComponent implements OnInit {

  public authors = '';
  public routerParams: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.routerParams.id = data['id'];
    });
    if (this.routerParams.id) {
      const courseItem = CourseService.getCoursesItemById(this.routerParams.id);
      this.authors = courseItem.authors;
    }
  }

}

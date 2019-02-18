import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CourseItem, CourseService } from '../../services/course.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  public name = '';

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.name = '';
        const courseId = +event.urlAfterRedirects.split('/')[2];
        if (courseId && typeof courseId === 'number') {
          this.courseService.getCoursesItemById(courseId).subscribe((res: CourseItem) => {
            this.name = res.name;
          });
        }
      }
    });
  }

  gotoCoursesList() {
    this.router.navigate(['courses']);
  }
}

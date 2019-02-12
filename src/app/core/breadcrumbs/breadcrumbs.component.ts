import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CourseService } from '../../courses-list/course.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  public title = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = '';
        const courseId = +event.urlAfterRedirects.split('/')[2];
        if (courseId && typeof courseId === 'number') {
          this.title = CourseService.getCoursesItemById(courseId).title;
        }
      }
    });
  }

  gotoCoursesList() {
    this.router.navigate(['courses']);
  }
}

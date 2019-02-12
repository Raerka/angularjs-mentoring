import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { CourseService } from '../../courses-list/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public title = '';
  public description = '';
  public routerParams: any = {};

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event: RouterEvent) => {
      // console.log(event);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.routerParams.id = data['id'];
    });
    if (this.routerParams.id) {
      const courseItem = CourseService.getCoursesItemById(this.routerParams.id);
      this.title = courseItem.title;
      this.description = courseItem.description;
    }
  }

  gotoCoursesList() {
    this.router.navigate(['courses']);
  }

  onClickSave() {
    console.log('Save');
    this.gotoCoursesList();
  }
}

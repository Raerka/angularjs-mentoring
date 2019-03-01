import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Author, CourseItem, CourseService } from '../../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public name = '';
  public creationDate = '';
  public length = null;
  public description = '';
  public authors = '';

  public routerParams: any = {};

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      // console.log(event);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.routerParams.id = data['id'];
    });
    if (this.routerParams.id) {
      this.courseService.getCoursesItemById(this.routerParams.id).subscribe((res: CourseItem) => {
        this.name = res.name;
        this.creationDate = res.date;
        this.length = res.length;
        this.description = res.description;
        this.authors = this.getAuthorsString(res.authors);
      });
    }
  }

  gotoCoursesList() {
    this.router.navigate(['courses']);
  }

  onClickSave() {
    console.log('Save');
    const courseItem = {
      id: 123,
      name: this.name,
      date: this.creationDate,
      length: this.length,
      isTopRated: true,
      description: this.description,
      authors: [{
        id: 123,
        firstName: this.authors,
        lastName: this.authors
      }]
    };
    this.courseService.createCoursesItem(courseItem);
    this.gotoCoursesList();
  }

  getAuthorsString(authors: Author[]): string {
    let authorsString = '';
    authors.forEach(author => {
      authorsString += `${author.firstName} ${author.lastName}, `;
    });
    return authorsString;
  }
}

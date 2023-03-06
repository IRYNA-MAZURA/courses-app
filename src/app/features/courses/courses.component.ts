import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesStoreService } from "../../services/courses-store/courses-store.service";
import { UserStoreService } from "../../user/services/user-store/user-store.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = this.coursesStoreService.courses$;
  isAdmin: boolean = false;
  isShowConfirmModal = false;
  deletedId: string | null = null;

  constructor(
    private coursesStoreService: CoursesStoreService,
    private userStoreService: UserStoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userStoreService.isAdmin$.subscribe((res) => {
    this.isAdmin = res;
    })
    this.coursesStoreService.getAll().subscribe();
  }

  deleteItem(id: string) {
    console.log("delete", id);
    this.isShowConfirmModal = true;
    this.deletedId = id;
  }

  confirmedDelete() {
    if (this.deletedId) {
      this.coursesStoreService.deleteCourse(this.deletedId).subscribe();
    }

    this.deletedId = null;
  }

  search(text: string) {
    if (text) {
      this.coursesStoreService.getFilterCourses(text).subscribe();
      console.log('search');
    } else {
      this.coursesStoreService.getAll().subscribe();
    }
  }

  addCourse(): void {
    console.log('add course');
    this.router.navigate(['/courses/add']);
  }
}

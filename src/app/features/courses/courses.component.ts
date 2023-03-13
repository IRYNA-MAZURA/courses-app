import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { UserStoreService } from "../../user/services/user-store/user-store.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$ = this.courseStateService.allCourses$;
  errorMessage$ = this.courseStateService.errorMessage$;
  isAdmin: boolean = false;
  isShowConfirmModal = false;
  deletedId: string | null = null;

  constructor(
    private courseStateService: CoursesStateFacade,
    private userStoreService: UserStoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userStoreService.isAdmin$.subscribe((res) => {
    this.isAdmin = res;
    })
    this.courseStateService.getAllCourses();
  }

  deleteItem(id: string) {
    console.log("delete", id);
    this.isShowConfirmModal = true;
    this.deletedId = id;
  }

  confirmedDelete() {
    if (this.deletedId) {
      this.courseStateService.deleteCourse(this.deletedId);
    }

    this.deletedId = null;
  }

  search(text: string) {
    if (text) {
      this.courseStateService.filteredCourses(text?.trim());
      console.log('search');
    } else {
      this.courseStateService.getAllCourses();
    }
  }

  addCourse(): void {
    console.log('add course');
    this.router.navigate(['/courses/add']);
  }
}

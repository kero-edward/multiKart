import { DataService } from './../../services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit, OnDestroy {

  blogId?: number;
  blog?: any;

  constructor(private route: ActivatedRoute, public data: DataService) {
    this.blogId = this.route.snapshot.params['id'];
    this.blog = data.blogs.filter(item => item.id == this.blogId);
  }

  ngOnInit(): void {
  }

  commentForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    comment: new FormControl(null, Validators.required)
  })

  get contactUsForm() {
    return this.commentForm.controls;
  }

  getData() {
    console.log('Name: ', this.commentForm.controls['name'].value);
    console.log('Email: ', this.commentForm.controls['email'].value);
    console.log('Comment: ', this.commentForm.controls['comment'].value);
  }

  ngOnDestroy(): void {
    this.blogId = undefined;
    this.blog = undefined;
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPosts } from '../posts.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: IPosts = {}
  postId: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.params.id;

    this.postsService.getPost(this.postId).subscribe((post) => {
      this.post = post;
    })
  }

}

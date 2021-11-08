import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';
import { IPosts } from '../posts.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: IPosts[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    }, (err) => {
      console.log(err);
    })
  }

}

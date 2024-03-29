import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: '',
        component: PostListComponent,
        data: {
          title: 'Posts'
        }
      },
      {
        path: ':id',
        component: PostDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts.routing.module';
import { PostListModule } from './post-list/post-list.module';
import { PostDetailsModule } from './post-details/post-details.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    // RouterModule,
    PostsRoutingModule,
    PostListModule,
    PostDetailsModule,
    SharedModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }

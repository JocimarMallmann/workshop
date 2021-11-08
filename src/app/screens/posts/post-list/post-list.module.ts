import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    // PostListComponent
  ]
})
export class PostListModule { }

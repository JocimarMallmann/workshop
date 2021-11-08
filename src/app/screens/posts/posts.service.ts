import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { IPosts } from './posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPosts[]> {
    return this.http.get(`${environment.api}/posts`)
      .pipe(map((posts: any) => {
        return posts.slice(0,6)
      }));
  }

  getPost(id: string): Observable<any> {
    return this.http.get(`${environment.api}/posts/${id}`);
  }

  getPostComments(id: string): Observable<any> {
    return this.http.get(`${environment}/posts/${id}/comments`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post(`${environment}/posts`, post);
  }

  updatePost(post: any): Observable<any> {
    return this.http.patch(`${environment}/posts`, post);
  }
  
}

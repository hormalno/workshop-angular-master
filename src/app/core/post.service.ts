import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IPost } from './interfaces';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  loadPostList(themeId: string, limit?: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(
      `${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`
    );
  }
}

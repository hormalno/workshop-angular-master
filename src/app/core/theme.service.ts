import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost, ITheme } from './interfaces';

const apiUrl = environment.apiUrl;

export interface PaginatedResponse<T> {
  results: T[];
  totalResults: number;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  addTheme$(body: { themeName: string, postText: string }): Observable<ITheme> {
    return this.http.post<ITheme>(`${apiUrl}/themes`, body, { withCredentials: true });
  }

  loadThemeList(searchTerm: string = ''): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${apiUrl}/themes?title=${searchTerm}`, {});
  }

  loadThemePaginatedList(searchTerm: string = '', startIndex: number, limit: number): Observable<PaginatedResponse<ITheme>> {
    return this.http.get<PaginatedResponse<ITheme>>(`${apiUrl}/themes/list`, {
      params: new HttpParams({
        fromObject: {
          title: searchTerm,
          startIndex,
          limit
        }
      })
    });
  }

  loadThemeById(id: string): Observable<ITheme<IPost, string>> {
    return this.http.get<ITheme<IPost, string>>(`${apiUrl}/themes/${id}`, { withCredentials: true });
  }

  likePost(postId: string): Observable<void> {
    return this.http.put<void>(`${apiUrl}/likes/${postId}`, {}, { withCredentials: true });
  }

  dislikePost(postId: string): Observable<void> {
    return this.http.put<void>(`${apiUrl}/dislikes/${postId}`, {}, { withCredentials: true });
  }

  subscribeToTheme(themeId: string): Observable<ITheme> {
    return this.http.put<ITheme>(`${apiUrl}/themes/${themeId}`, {}, { withCredentials: true });
  }

  unsubscribe(themeId: string): Observable<ITheme> {
    return this.http.put<ITheme>(`${apiUrl}/themes/${themeId}/unsubscribe`, {}, { withCredentials: true });
  }
}

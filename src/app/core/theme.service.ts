import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost, ITheme } from './interfaces';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemeList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${apiUrl}/themes`)
  }

  loadThemeById(id: string): Observable<ITheme<IPost>> {
    return this.http.get<ITheme<IPost>>(`${apiUrl}/themes/${id}`)
  }
}

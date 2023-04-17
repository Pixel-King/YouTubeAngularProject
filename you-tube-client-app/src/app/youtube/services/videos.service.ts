import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SearchResponce } from '../models/search-responce.model';
import { VideoVideosRes, VideosResponce } from '../models/videos-responce.model';
import { OrderParam } from 'src/app/core/model/order-parameter.model';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  private apiKey = 'AIzaSyA9Bw4dbepo-wd25AsUxqzno3KN4DD4E98';

  constructor(private http: HttpClient) {}

  getVideos(search: String = '', filter: String = '', order: OrderParam = 'relevance' ): Observable<String[]> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', `${search} ${filter}`)
      .set('order', order)
      .set('part', 'id')
      .set('type', 'video');
    return this.http.get<SearchResponce>(`${this.apiUrl}/search`, { params }).pipe(map(res => res.items.map(item => item.id.videoId)));
  }

  getVideo(id: String):Observable<VideoVideosRes[]> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .append('part', 'statistics')
      .set('id', `${id}`)
      .set('key', this.apiKey);

    return this.http.get<VideosResponce>(`${this.apiUrl}/videos`, { params }).pipe(map(res => res.items));
  }
}

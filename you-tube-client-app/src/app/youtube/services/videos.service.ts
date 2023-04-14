import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { data } from '../data/yuoTubeApiRes';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private videos = data.items.map(el => new SearchItem(el));

  getVideos(): SearchItem[] {
    return this.videos;
  }

  getVideo(id: string): SearchItem | undefined {
    return this.videos.find(video => video.id === id);
  }
}

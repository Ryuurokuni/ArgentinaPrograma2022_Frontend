import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AcercaDe } from '../model/acerca-de';
import { BannerImages } from '../model/BannerImages';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private url = `${environment.apiUri}/imagenes`;


  profileUrl = this.url + "/profile";
  bannerUrl = this.url + "/banner";
  
  constructor(private httpClient : HttpClient) { 
  }

  public submit(fd: FormData): Observable<BannerImages>{
    return this.httpClient.post<BannerImages>(this.url, fd);
  }

}
